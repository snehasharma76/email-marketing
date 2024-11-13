// src/app/dashboard/page.tsx
import { DashboardLayout } from '@/components/layout/dashboard-layout'
import { Button } from '@/components/ui/button'
import { 
  BarChart, 
  Users, 
  Mail,
  ArrowUp,
  ArrowDown,
  Plus
} from 'lucide-react'

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Dashboard</h1>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Campaign
          </Button>
        </div>

        {/* Stats */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg border bg-card p-6">
            <div className="flex items-center gap-4">
              <Users className="h-8 w-8 text-blue-500" />
              <div>
                <p className="text-sm text-muted-foreground">Total Subscribers</p>
                <p className="text-2xl font-bold">2,420</p>
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm text-green-500">
              <ArrowUp className="mr-1 h-4 w-4" />
              12% from last month
            </div>
          </div>

          <div className="rounded-lg border bg-card p-6">
            <div className="flex items-center gap-4">
              <Mail className="h-8 w-8 text-purple-500" />
              <div>
                <p className="text-sm text-muted-foreground">Sent Emails</p>
                <p className="text-2xl font-bold">14,320</p>
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm text-green-500">
              <ArrowUp className="mr-1 h-4 w-4" />
              8% from last month
            </div>
          </div>

          <div className="rounded-lg border bg-card p-6">
            <div className="flex items-center gap-4">
              <BarChart className="h-8 w-8 text-yellow-500" />
              <div>
                <p className="text-sm text-muted-foreground">Open Rate</p>
                <p className="text-2xl font-bold">24.8%</p>
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm text-red-500">
              <ArrowDown className="mr-1 h-4 w-4" />
              3% from last month
            </div>
          </div>

          <div className="rounded-lg border bg-card p-6">
            <div className="flex items-center gap-4">
              <BarChart className="h-8 w-8 text-green-500" />
              <div>
                <p className="text-sm text-muted-foreground">Click Rate</p>
                <p className="text-2xl font-bold">12.5%</p>
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm text-green-500">
              <ArrowUp className="mr-1 h-4 w-4" />
              2% from last month
            </div>
          </div>
        </div>

        {/* Recent Campaigns */}
        <div className="rounded-lg border">
          <div className="p-6">
            <h2 className="text-lg font-semibold">Recent Campaigns</h2>
          </div>
          <div className="border-t">
            <table className="w-full">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="py-3 px-6 text-left text-sm font-medium">Campaign</th>
                  <th className="py-3 px-6 text-left text-sm font-medium">Status</th>
                  <th className="py-3 px-6 text-left text-sm font-medium">Opens</th>
                  <th className="py-3 px-6 text-left text-sm font-medium">Clicks</th>
                  <th className="py-3 px-6 text-left text-sm font-medium">Date</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    name: "Welcome Series",
                    status: "Active",
                    opens: "45%",
                    clicks: "12%",
                    date: "2024-03-15",
                  },
                  {
                    name: "Monthly Newsletter",
                    status: "Completed",
                    opens: "38%",
                    clicks: "8%",
                    date: "2024-03-10",
                  },
                  {
                    name: "Product Launch",
                    status: "Draft",
                    opens: "-",
                    clicks: "-",
                    date: "2024-03-05",
                  },
                ].map((campaign, index) => (
                  <tr key={index} className="border-b last:border-0">
                    <td className="py-3 px-6">{campaign.name}</td>
                    <td className="py-3 px-6">
                      <span className={cn(
                        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
                        campaign.status === "Active" ? "bg-green-100 text-green-800" :
                        campaign.status === "Draft" ? "bg-gray-100 text-gray-800" :
                        "bg-blue-100 text-blue-800"
                      )}>
                        {campaign.status}
                      </span>
                    </td>
                    <td className="py-3 px-6">{campaign.opens}</td>
                    <td className="py-3 px-6">{campaign.clicks}</td>
                    <td className="py-3 px-6">{campaign.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}