import { Routes } from '@angular/router';
import { BasicComponent } from './examples/basic/basic.component';
import { ReorderComponent } from './examples/reorder/reorder.component';
import { TransferComponent } from './examples/transfer/transfer.component';
import { HandleComponent } from './examples/handle/handle.component';
import { PreviewComponent } from './examples/preview/preview.component';
import { PlaceholderComponent } from './examples/placeholder/placeholder.component';
import { OrientationComponent } from './examples/orientation/orientation.component';
import { WrapComponent } from './examples/wrap/wrap.component';
import { RestrictComponent } from './examples/restrict/restrict.component';
import { RestrictAxisComponent } from './examples/restrict-axis/restrict-axis.component';
import { DialogComponent } from './examples/dialog/dialog.component';

export const routes: Routes = [
    { path: 'examples/basic', component: BasicComponent },
    { path: 'examples/reorder', component: ReorderComponent },
    { path: 'examples/transfer', component: TransferComponent },
    { path: 'examples/handle', component: HandleComponent },
    { path: 'examples/preview', component: PreviewComponent },
    { path: 'examples/placeholder', component: PlaceholderComponent },
    { path: 'examples/orientation', component: OrientationComponent },
    { path: 'examples/wrap', component: WrapComponent },
    { path: 'examples/restrict', component: RestrictComponent },
    //RestrictAxisComponent
    { path: 'examples/restrict-axis', component: RestrictAxisComponent },
    { path: 'examples/dialog', component: DialogComponent },

];
