using System;
namespace LOCKD
{
	public class User
	{
		public string email { get; set; }
		public string password { get; set; }

		
		public User(string Email, string Password)
		{
			email = Email;
			password = Password;

		}
	}
}
