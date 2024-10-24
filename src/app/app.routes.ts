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
import { ContainerControlComponent } from './examples/container-control/container-control.component';
import { DisableDragComponent } from './examples/disable-drag/disable-drag.component';
import { DelayDragComponent } from './examples/delay-drag/delay-drag.component';
import { SortableTableComponent } from './examples/sortable-table/sortable-table.component';
import { SortableTabComponent } from './examples/sortable-tab/sortable-tab.component';

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
    { path: 'examples/container-control', component: ContainerControlComponent },
    { path: 'examples/disable-drag', component: DisableDragComponent },
    { path: 'examples/delay-drag', component: DelayDragComponent },
    { path: 'examples/sortable-table', component: SortableTableComponent },
    { path: 'examples/sortable-tab', component: SortableTabComponent },


];
