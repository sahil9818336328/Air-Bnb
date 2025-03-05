import StatsContainer from '@/components/admin/StatsContainer'
import {
  ChartsLoadingContainer,
  StatsLoadingContainer,
} from '@/components/admin/Loading'
import { Suspense } from 'react'
import ChartContainer from '@/components/admin/ChartContainer'
async function AdminPage() {
  return (
    <>
      <Suspense fallback={<StatsLoadingContainer />}>
        <StatsContainer />
      </Suspense>
      <Suspense fallback={<ChartsLoadingContainer />}>
        <ChartContainer />
      </Suspense>
    </>
  )
}
export default AdminPage
