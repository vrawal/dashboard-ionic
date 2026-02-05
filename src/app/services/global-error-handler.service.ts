import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private injector: Injector) {}

  handleError(error: Error | any): void {
    const router = this.injector.get(Router);
    
    // Log error to console in development
    console.error('Global error handler caught:', error);

    // Extract error details
    const errorMessage = error?.message || error?.toString() || 'An unexpected error occurred';
    const errorStack = error?.stack;

    // Log structured error information
    console.error('Error Details:', {
      message: errorMessage,
      stack: errorStack,
      url: router?.url,
      timestamp: new Date().toISOString(),
    });

    // Here you can add additional error handling logic:
    // - Send error to a logging service (e.g., Sentry, Application Insights)
    // - Show a user-friendly toast/alert
    // - Navigate to an error page
    // - Store error in local storage for later analysis

    // Example: You could integrate with Ionic Toast Controller
    // const toastController = this.injector.get(ToastController);
    // toastController.create({
    //   message: 'An error occurred. Please try again.',
    //   duration: 3000,
    //   color: 'danger'
    // }).then(toast => toast.present());

    // Re-throw the error in development for debugging
    if (!this.isProduction()) {
      throw error;
    }
  }

  private isProduction(): boolean {
    // Check if running in production mode
    return false; // Set to true in production or use environment variable
  }
}
