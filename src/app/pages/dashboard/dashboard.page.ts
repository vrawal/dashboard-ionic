import { Component, OnInit } from '@angular/core';

interface StatCard {
  title: string;
  value: string;
  icon: string;
  color: string;
  trend?: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: false,
})
export class DashboardPage implements OnInit {
  stats: StatCard[] = [
    {
      title: 'Total Users',
      value: '2,543',
      icon: 'people-outline',
      color: 'primary',
      trend: '+12%'
    },
    {
      title: 'Revenue',
      value: '$45,678',
      icon: 'cash-outline',
      color: 'success',
      trend: '+8.5%'
    },
    {
      title: 'Orders',
      value: '1,234',
      icon: 'cart-outline',
      color: 'warning',
      trend: '+5.2%'
    },
    {
      title: 'Active Sessions',
      value: '567',
      icon: 'pulse-outline',
      color: 'tertiary',
      trend: '+23%'
    }
  ];

  recentActivities = [
    { user: 'John Doe', action: 'Completed purchase', time: '2 mins ago', icon: 'checkmark-circle' },
    { user: 'Jane Smith', action: 'Created new account', time: '15 mins ago', icon: 'person-add' },
    { user: 'Mike Johnson', action: 'Updated profile', time: '1 hour ago', icon: 'create' },
    { user: 'Sarah Williams', action: 'Left a review', time: '2 hours ago', icon: 'star' },
  ];

  constructor() { }

  ngOnInit() {
  }

  refreshDashboard(event: any) {
    setTimeout(() => {
      // Simulate data refresh
      console.log('Dashboard refreshed');
      event.target.complete();
    }, 1500);
  }
}
