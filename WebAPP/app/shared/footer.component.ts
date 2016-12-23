/**
 * Created by Sander Verkaemer on 07/12/2016.
 */
import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'DashboardFooter',
    template: `
        <footer>
            <div class="navbar navbar-fixed-bottom">
                <div class="navbar-inner footer">
                    <div class="container">
                        <footer>
                            <div class="row">
                                <div class="col-md-12">
                                    © Lock'D. All rights reserved.
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        </footer>
`
})

export class FooterComponent{

}