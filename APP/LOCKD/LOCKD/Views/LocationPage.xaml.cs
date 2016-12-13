using System;
using System.Collections.Generic;
using Xamarin.Forms.Maps;
using System.Linq;
using Xamarin.Forms;


namespace LOCKD
{
	public partial class LocationPage : ContentPage
	{
		public LocationPage()
		{
			InitializeComponent();
			LocationMap.MoveToRegion(
				MapSpan.FromCenterAndRadius(
					new Position(50.8264285, 3.2602982), 
					Distance.FromKilometers(0.3)));
			LocationMap.IsShowingUser = true;

			lblInformation.Text = "INFORMATION";
			lblInformation.Margin = new Thickness(10, 0, 10, 0);

			stckLayoutUser.Margin = new Thickness(10, 0, 10, 0);
			stckLayoutUser.Orientation = StackOrientation.Horizontal;

			stckLayoutLocation.Margin = new Thickness(10, 0, 10, 0);
			stckLayoutLocation.Orientation = StackOrientation.Horizontal;

			stckLayoutState.Margin = new Thickness(10,0,10,10);
			stckLayoutState.Orientation = StackOrientation.Horizontal;

			lblUser.Text = "USER";
			lblUser.FontAttributes = FontAttributes.Bold;
			lblUser.Margin = new Thickness(3, 0, 0, 0);

			lblUserAnswer.Text = "John Doe";
			lblUser.Margin = new Thickness(0, 0, 3, 0);

			lblLocation.Text = "LOCATION";
			lblLocation.FontAttributes = FontAttributes.Bold;
			lblLocation.Margin = new Thickness(3, 0, 0, 0);

			lblLocationAnswer.Text = "Graaf Karel de goedelaan 5";
			lblLocation.Margin = new Thickness(0, 0, 3, 0);

			lblState.Text = "STATUS";
			lblState.FontAttributes = FontAttributes.Bold;
			lblState.Margin = new Thickness(3, 0, 0, 0);

			lblStateAnswer.Text = "LOCK'D";
			lblState.Margin = new Thickness(0, 0, 3, 0);
		}
}
}
