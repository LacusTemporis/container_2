import { ErrorRepository } from '../errorRepository.js';

test('returns correct error message for known error codes', () => {
  const errorRepo = new ErrorRepository();
  expect(errorRepo.translate(404)).toBe('Not Found');
  expect(errorRepo.translate(500)).toBe('Internal Server Error');
});

test('returns "Unknown error" for unknown error codes', () => {
  const errorRepo = new ErrorRepository();
  expect(errorRepo.translate(123)).toBe('Unknown error');
  expect(errorRepo.translate(999)).toBe('Unknown error');
});