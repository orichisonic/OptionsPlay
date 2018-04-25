﻿using System;
using System.Security.Cryptography;
using System.Text;

namespace OptionsPlay.Security.Utilits
{
	internal static class CryptoHelper
	{
		/// <summary>
		/// http://www.obviex.com/samples/hash.aspx
		/// </summary>
		internal static string GetStringHash(string plainText, byte[] saltBytes, int hashSize)
		{
			// Convert plain text into a byte array.
			byte[] plainTextBytes = Encoding.UTF8.GetBytes(plainText);

			// Allocate array, which will hold plain text and salt.
			byte[] plainTextWithSaltBytes =
					new byte[plainTextBytes.Length + saltBytes.Length];

			// Copy plain text bytes into resulting array.
			for (int i = 0; i < plainTextBytes.Length; i++)
			{
				plainTextWithSaltBytes[i] = plainTextBytes[i];
			}

			// Append salt bytes to the resulting array.
			for (int i = 0; i < saltBytes.Length; i++)
			{
				plainTextWithSaltBytes[plainTextBytes.Length + i] = saltBytes[i];
			}

			// Hash Algorithm
			HashAlgorithm hash = new MD5CryptoServiceProvider();

			// Compute hash value of our plain text with appended salt.
			byte[] hashBytes = hash.ComputeHash(plainTextWithSaltBytes);

			// Create array which will hold hash and original salt bytes.
			byte[] hashWithSaltBytes = new byte[hashBytes.Length + saltBytes.Length];

			// Copy hash bytes into resulting array.
			for (int i = 0; i < hashBytes.Length; i++)
			{
				hashWithSaltBytes[i] = hashBytes[i];
			}

			// Append salt bytes to the result.
			for (int i = 0; i < saltBytes.Length; i++)
			{
				hashWithSaltBytes[hashBytes.Length + i] = saltBytes[i];
			}

			// Convert result into a base64-encoded string.
			string hashValue = Convert.ToBase64String(hashWithSaltBytes).Substring(0, hashSize);

			// Return the result.
			return hashValue;
		}
	}
}
