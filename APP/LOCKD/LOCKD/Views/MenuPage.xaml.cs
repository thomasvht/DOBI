using System;
using System.Collections.Generic;

using Xamarin.Forms;

namespace LOCKD
{
	public partial class MenuPage : MasterDetailPage
	{
		public MenuPage()
		{
			InitializeComponent();
			settingBtnError.Image = "error.png";
			settingBtnSettings.Image = "settings.png";
			settingBtnFacebook.Image = "facebook.png";
			settingBtnTwitter.Image = "twitter.png";
		}

		private async void Location_Button_OnClicked(object sender, EventArgs e)
		{
			await Navigation.PushAsync(new LocationPage());
		}

		private async void Sessions_Button_OnClicked(object sender, EventArgs e)
		{
			await Navigation.PushAsync(new SessionsPage());
		}

		private async void Invite_Button_OnClicked(object sender, EventArgs e)
		{
			await Navigation.PushAsync(new InvitePage());
		}

		private async void Alerts_Button_OnClicked(object sender, EventArgs e)
		{
			await Navigation.PushAsync(new AlertsPage());
		}

		private async void Settings_Button_OnClicked(object sender, EventArgs e)
		{
			await Navigation.PushAsync(new SettingsPage());
		}

		private async void Error_Button_OnClicked(object sender, EventArgs e)
		{
			await Navigation.PushAsync(new ErrorPage());
		}
	}
}
