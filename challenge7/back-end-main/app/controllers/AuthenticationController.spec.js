const AuthenticationController = require("./AuthenticationController");
const {
  EmailNotRegisteredError,
  WrongPasswordError,
  EmailAlreadyTakenError,
  InsufficientAccessError,
  RecordNotFoundError,
} = require("../errors");

const mockUserModel = {
  findOne: jest.fn(),
  create: jest.fn(),
  findByPk: jest.fn(),
};

const mockRoleModel = {
  findOne: jest.fn(),
  findByPk: jest.fn(),
};

const mockBcrypt = {
  hashSync: jest.fn(),
  compareSync: jest.fn(),
};

const mockJwt = {
  sign: jest.fn(),
  verify: jest.fn(),
};

const authController = new AuthenticationController({
  userModel: mockUserModel,
  roleModel: mockRoleModel,
  bcrypt: mockBcrypt,
  jwt: mockJwt,
});

describe("AuthenticationController", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("handleLogin", () => {
    it("should respond with a token on successful login", async () => {
      const mockRequest = {
        body: { email: "test@example.com", password: "password" },
      };
      const mockResponse = {
        status: jest.fn(() => mockResponse),
        json: jest.fn(),
      };
      const mockNext = jest.fn();

      const mockUser = {
        id: 1,
        name: "Test User",
        email: "test@example.com",
        encryptedPassword: "hashed_password",
        Role: { id: 1, name: "CUSTOMER" },
      };

      mockUserModel.findOne.mockResolvedValueOnce(mockUser);
      mockBcrypt.compareSync.mockReturnValueOnce(true);
      mockJwt.sign.mockReturnValueOnce("mocked_token");

      await authController.handleLogin(mockRequest, mockResponse, mockNext);

      expect(mockResponse.status).toHaveBeenCalledWith(201);
      expect(mockResponse.json).toHaveBeenCalledWith({
        accessToken: "mocked_token",
      });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should respond with EmailNotRegisteredError for non-existing email", async () => {
      const mockRequest = {
        body: { email: "nonexistent@example.com", password: "password" },
      };
      const mockResponse = {
        status: jest.fn(() => mockResponse),
        json: jest.fn(),
      };
      const mockNext = jest.fn();

      mockUserModel.findOne.mockResolvedValueOnce(null);

      await authController.handleLogin(mockRequest, mockResponse, mockNext);

      expect(mockResponse.status).toHaveBeenCalledWith(404);
      expect(mockResponse.json).toHaveBeenCalledWith(
        new EmailNotRegisteredError("nonexistent@example.com")
      );
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should respond with WrongPasswordError for incorrect password", async () => {
      const mockRequest = {
        body: { email: "test@example.com", password: "incorrect_password" },
      };
      const mockResponse = {
        status: jest.fn(() => mockResponse),
        json: jest.fn(),
      };
      const mockNext = jest.fn();

      const mockUser = {
        id: 1,
        name: "Test User",
        email: "test@example.com",
        encryptedPassword: "hashed_password",
        Role: { id: 1, name: "CUSTOMER" },
      };

      mockUserModel.findOne.mockResolvedValueOnce(mockUser);
      mockBcrypt.compareSync.mockReturnValueOnce(false);

      await authController.handleLogin(mockRequest, mockResponse, mockNext);

      expect(mockResponse.status).toHaveBeenCalledWith(401);
      expect(mockResponse.json).toHaveBeenCalledWith(new WrongPasswordError());
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("should call the next middleware for other errors", async () => {
      const mockRequest = {
        body: { email: "test@example.com", password: "password" },
      };
      const mockResponse = {
        status: jest.fn(() => mockResponse),
        json: jest.fn(),
      };
      const mockNext = jest.fn();

      mockUserModel.findOne.mockRejectedValueOnce(new Error("Test error"));

      await authController.handleLogin(mockRequest, mockResponse, mockNext);

      expect(mockNext).toHaveBeenCalledWith(new Error("Test error"));
      expect(mockResponse.status).not.toHaveBeenCalled();
      expect(mockResponse.json).not.toHaveBeenCalled();
    });
  });
});
