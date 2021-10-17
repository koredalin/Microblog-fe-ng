import { PostDashboardUrls } from "./transaction-dashboard/post-dashboard-urls";
import { UserUrls } from "./user-dashboard/user-urls";

export class AppUrls {
    public static HOME = '/';
    public static TRANSACTIONS_HOME = PostDashboardUrls.HOME;
    public static TRANSACTION_SUBMIT_HOME = UserUrls.HOME;
}