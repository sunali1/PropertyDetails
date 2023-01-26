import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import Detail from "../modules/property-details";
import {Banner} from "../components/banner"

export default function PropertyDetails() {

// Note: React Query cache is stored in-memory
  const queryClient = new QueryClient;
  return (
    <QueryClientProvider client={queryClient} >
      <Banner>Property Details</Banner>
      <Detail/>
    </QueryClientProvider>
  );
}
