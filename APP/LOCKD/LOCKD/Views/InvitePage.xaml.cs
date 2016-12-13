using System;
using System.Collections.Generic;

using Xamarin.Forms;

namespace LOCKD
{
	public partial class InvitePage : ContentPage
	{
		public InvitePage()
		{
			InitializeComponent();

			stckLayoutInvite.Margin = new Thickness(10, 0, 10, 0);

			lblFriends.Text = "FRIENDS";

			stckLayoutContacts.Orientation = StackOrientation.Horizontal;

			cImgFirst.BorderColor = Color.White;
			cImgFirst.BorderThickness = 3;
			cImgFirst.HeightRequest = 90;
			cImgFirst.WidthRequest = 90;
			cImgFirst.Margin = new Thickness(20, 0, 5, 0);
			cImgFirst.HorizontalOptions = LayoutOptions.Start;
			cImgFirst.Source = ImageSource.FromUri(new Uri("https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAOGAAAAJDMxMWFjMmFhLTI1MmEtNGQ5NC1iMmVhLTkxZGQ0ZWU4YjkwMg.jpg"));

			cImgSecond.BorderColor = Color.White;
			cImgSecond.BorderThickness = 3;
			cImgSecond.HeightRequest = 90;
			cImgSecond.WidthRequest = 90;
			cImgSecond.Margin = new Thickness(0, 0, 5, 0);
			cImgSecond.HorizontalOptions = LayoutOptions.Start;
			cImgSecond.Source = ImageSource.FromUri(new Uri("https://yt3.ggpht.com/-Su6dQzsB3gs/AAAAAAAAAAI/AAAAAAAAAAA/Yq--5bWlvAo/s900-c-k-no-mo-rj-c0xffffff/photo.jpg"));

			cImgThird.BorderColor = Color.White;
			cImgThird.BorderThickness = 3;
			cImgThird.HeightRequest = 90;
			cImgThird.WidthRequest = 90;
			cImgThird.HorizontalOptions = LayoutOptions.Start;
			cImgThird.Source = ImageSource.FromUri(new Uri("https://pbs.twimg.com/profile_images/461900490263896065/BbgAjD9J.jpeg"));

			btnAdd.Text = "+";
			btnAdd.Margin = new Thickness(0, 340, 10, 0);
			btnAdd.TextColor = Color.FromHex("#234567");
			btnAdd.FontSize = 70;
			btnAdd.FontAttributes = FontAttributes.Bold;
			btnAdd.HeightRequest = 90;
			btnAdd.WidthRequest = 90;
			btnAdd.HorizontalOptions = LayoutOptions.End;
			btnAdd.BorderRadius = 45;
	}
		
	}
}
