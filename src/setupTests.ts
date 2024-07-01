import "@testing-library/jest-dom";

const mockGeolocation = {
  getCurrentPosition: jest.fn(),
  watchPosition: jest.fn(),
};

(global as any).navigator.geolocation = mockGeolocation;
