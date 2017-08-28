import { UserComponent } from './user.component';
import {AppPortfolio} from './portfolio.component';

export const AppRoutes: any = [
    { path: "", component: UserComponent },
    { path: "portfolio", component: AppPortfolio }
];
 
export const AppComponents: any = [
    UserComponent,
    AppPortfolio
];