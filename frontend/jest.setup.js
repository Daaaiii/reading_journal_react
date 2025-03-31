import "@testing-library/jest-dom"; 
import { jest } from "@jest/globals";


import { TextEncoder, TextDecoder } from "util";
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({}),
    })
  );
global.fetch.mockClear = jest.fn(() => Promise.resolve({}));  