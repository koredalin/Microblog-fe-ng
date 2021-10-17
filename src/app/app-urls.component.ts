import { TransactionDashboardUrls } from "./transaction-dashboard/transaction-dashboard-urls.component";
import { TransactionSubmitUrls } from "./transaction-submit/transaction-submit-urls.component";

export class AppUrls {
    public static HOME = '/';
    public static TRANSACTIONS_HOME = TransactionDashboardUrls.HOME;
    public static TRANSACTION_SUBMIT_HOME = TransactionSubmitUrls.HOME;
}