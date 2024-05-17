import { ErrorRepository } from '../errorRepository.js';

test('returns correct error message for known error codes', () => {
  const errorRepo = new ErrorRepository();
  expect(errorRepo.translate(404)).toBe('Not Found');
  expect(errorRepo.translate(500)).toBe('Internal Server Error');
  expect(errorRepo.translate(401)).toBe('Unauthorized');
});

test('returns "Unknown error" for unknown error codes', () => {
  const errorRepo = new ErrorRepository();
  expect(errorRepo.translate(123)).toBe('Unknown error');
  expect(errorRepo.translate(999)).toBe('Unknown error');
});

test('returns "Unknown error" for non-numeric error codes', () => {
  const errorRepo = new ErrorRepository();
  expect(errorRepo.translate('404')).toBe('Unknown error'); // передан строковый код
  expect(errorRepo.translate(null)).toBe('Unknown error'); // передан null
  expect(errorRepo.translate(undefined)).toBe('Unknown error'); // передано undefined
});

test('returns "Unknown error" when no errors are defined', () => {
  const errorRepo = new ErrorRepository();
  errorRepo.errors = new Map(); // Очистка Map
  expect(errorRepo.translate(404)).toBe('Unknown error');
});