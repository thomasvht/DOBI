using System;
using System.Collections.Generic;
using Newtonsoft.Json;
using Xamarin.Forms;
using System.Threading.Tasks;
using System.Net.Http;
using System.Text;
using System.Diagnostics;

namespace LOCKD
{
	public partial class LoginPage : ContentPage
	{
		string token = "";

		public LoginPage()
		{
			InitializeComponent();
			stckLogin.Orientation = StackOrientation.Vertical;
			stckLogin.Margin = new Thickness(20, 50, 20, 0);
			lblEmail.Text = "EMAIL";
			lblEmail.HorizontalOptions = LayoutOptions.Center;
			lblPassword.Text = "PASSWORD";
			lblPassword.HorizontalOptions = LayoutOptions.Center;
			btnLogin.Text = "LOGIN";

			entEmail.Placeholder = "Fill in your email";
			entPassword.Placeholder = "Fill in your password";
			entPassword.IsPassword = true;
		}

		private async void Button_Login_OnClicked(object sender, EventArgs e)
		{
			await Navigation.PushModalAsync(new NavigationPage(new MenuPage()));
			string email = entEmail.Text;
			string password = entPassword.Text;

			//users.Add(new User(email, password, token));

			await Login(email, password);
		}

		private async Task<string> Login(string email, string password)
		{
			try
			{
				var client = new HttpClient();
				//client.DefaultRequestHeaders.Add("Content-Type", "application/json");

				var json = JsonConvert.SerializeObject(new User(email, password));
				var content = new StringContent(json, Encoding.UTF8, "application/json");
				var result = await client.PostAsync("http://172.30.248.133:5000/login", content).ConfigureAwait(false);
				if (result.IsSuccessStatusCode)
				{
					var tokenJson = await result.Content.ReadAsStringAsync();
					token = tokenJson;
					Debug.WriteLine(token);
				}
				return "Login was succesfull";

			}
			catch (Exception ex)
			{
				throw new Exception(ex.Message);
			}
		}
	}
}
