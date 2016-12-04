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
		}
}
}
