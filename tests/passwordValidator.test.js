import { validatePassword } from '../src/passwordValidator.js';
import { describe, beforeEach, expect, it } from "vitest";
it('Le mot de passe doit comporter au moins 8 caractères', () => {
  const password = 'pass';
  const validationResult = validatePassword(password);
  expect(validationResult.valid).toBe(false);
  expect(validationResult.errors).toContain('Le mot de passe doit comporter au moins 8 caractères');
});

it('Le mot de passe doit contenir au moins 2 chiffres', () => {
  const password = 'password';
  const validationResult = validatePassword(password);
  expect(validationResult.valid).toBe(false);
  expect(validationResult.errors).toContain('Le mot de passe doit contenir au moins 2 chiffres');
});

it('Le mot de passe doit contenir au moins une lettre majuscule', () => {
  const password = '&password12';
  const validationResult = validatePassword(password);
  expect(validationResult.valid).toBe(false);
  expect(validationResult.errors).toContain('Le mot de passe doit contenir au moins une lettre majuscule');
});

it('Le mot de passe doit contenir au moins un caractère spécial', () => {
  const password = 'Password1';
  const validationResult = validatePassword(password);
  expect(validationResult.valid).toBe(false);
  expect(validationResult.errors).toContain('Le mot de passe doit contenir au moins un caractère spécial');
});