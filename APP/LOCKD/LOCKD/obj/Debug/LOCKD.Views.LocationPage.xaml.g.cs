// ------------------------------------------------------------------------------
//  <autogenerated>
//      This code was generated by a tool.
//      Mono Runtime Version: 4.0.30319.42000
// 
//      Changes to this file may cause incorrect behavior and will be lost if 
//      the code is regenerated.
//  </autogenerated>
// ------------------------------------------------------------------------------

namespace LOCKD {
    using System;
    using Xamarin.Forms;
    using Xamarin.Forms.Xaml;
    
    
    public partial class LocationPage : global::Xamarin.Forms.ContentPage {
        
        [System.CodeDom.Compiler.GeneratedCodeAttribute("Xamarin.Forms.Build.Tasks.XamlG", "0.0.0.0")]
        private global::Xamarin.Forms.Maps.Map LocationMap;
        
        [System.CodeDom.Compiler.GeneratedCodeAttribute("Xamarin.Forms.Build.Tasks.XamlG", "0.0.0.0")]
        private global::Xamarin.Forms.Label lblInformation;
        
        [System.CodeDom.Compiler.GeneratedCodeAttribute("Xamarin.Forms.Build.Tasks.XamlG", "0.0.0.0")]
        private global::Xamarin.Forms.StackLayout stckLayoutUser;
        
        [System.CodeDom.Compiler.GeneratedCodeAttribute("Xamarin.Forms.Build.Tasks.XamlG", "0.0.0.0")]
        private global::Xamarin.Forms.Label lblUser;
        
        [System.CodeDom.Compiler.GeneratedCodeAttribute("Xamarin.Forms.Build.Tasks.XamlG", "0.0.0.0")]
        private global::Xamarin.Forms.Label lblUserAnswer;
        
        [System.CodeDom.Compiler.GeneratedCodeAttribute("Xamarin.Forms.Build.Tasks.XamlG", "0.0.0.0")]
        private global::Xamarin.Forms.StackLayout stckLayoutLocation;
        
        [System.CodeDom.Compiler.GeneratedCodeAttribute("Xamarin.Forms.Build.Tasks.XamlG", "0.0.0.0")]
        private global::Xamarin.Forms.Label lblLocation;
        
        [System.CodeDom.Compiler.GeneratedCodeAttribute("Xamarin.Forms.Build.Tasks.XamlG", "0.0.0.0")]
        private global::Xamarin.Forms.Label lblLocationAnswer;
        
        [System.CodeDom.Compiler.GeneratedCodeAttribute("Xamarin.Forms.Build.Tasks.XamlG", "0.0.0.0")]
        private global::Xamarin.Forms.StackLayout stckLayoutState;
        
        [System.CodeDom.Compiler.GeneratedCodeAttribute("Xamarin.Forms.Build.Tasks.XamlG", "0.0.0.0")]
        private global::Xamarin.Forms.Label lblState;
        
        [System.CodeDom.Compiler.GeneratedCodeAttribute("Xamarin.Forms.Build.Tasks.XamlG", "0.0.0.0")]
        private global::Xamarin.Forms.Label lblStateAnswer;
        
        [System.CodeDom.Compiler.GeneratedCodeAttribute("Xamarin.Forms.Build.Tasks.XamlG", "0.0.0.0")]
        private void InitializeComponent() {
            this.LoadFromXaml(typeof(LocationPage));
            LocationMap = this.FindByName <global::Xamarin.Forms.Maps.Map>("LocationMap");
            lblInformation = this.FindByName <global::Xamarin.Forms.Label>("lblInformation");
            stckLayoutUser = this.FindByName <global::Xamarin.Forms.StackLayout>("stckLayoutUser");
            lblUser = this.FindByName <global::Xamarin.Forms.Label>("lblUser");
            lblUserAnswer = this.FindByName <global::Xamarin.Forms.Label>("lblUserAnswer");
            stckLayoutLocation = this.FindByName <global::Xamarin.Forms.StackLayout>("stckLayoutLocation");
            lblLocation = this.FindByName <global::Xamarin.Forms.Label>("lblLocation");
            lblLocationAnswer = this.FindByName <global::Xamarin.Forms.Label>("lblLocationAnswer");
            stckLayoutState = this.FindByName <global::Xamarin.Forms.StackLayout>("stckLayoutState");
            lblState = this.FindByName <global::Xamarin.Forms.Label>("lblState");
            lblStateAnswer = this.FindByName <global::Xamarin.Forms.Label>("lblStateAnswer");
        }
    }
}