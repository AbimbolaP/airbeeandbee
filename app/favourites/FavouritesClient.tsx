import { Suspense } from "react";

import Container from "../components/Container";
import Heading from "../components/Heading";
import ListingCard from "../components/listings/ListingCard";
import { SafeListing, SafeUser } from "../types";
import Loading from "../loading";
import ListingPage from "./page";

interface FavouritesClientProps {
  listings: SafeListing[];
  currentUser?: SafeUser | null;
}

const FavouritesClient: React.FC<FavouritesClientProps> = ({
  listings,
  currentUser,
}) => {
  return (
    <Suspense fallback={<ListingPage/>}>
    <Container>
      <Heading
        title="Favourites"
        subtitle="List of places you loved!"
      />

      <div
       className="
        mt-10
        grid
        grid-col-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        xl:grid-cols-5
        2xl:grid-cols-6
        gap-8
     ">
       {listings.map((listing)=> (
         <ListingCard
           key={listing.id}
           data={listing}
           currentUser={currentUser}
         />
       ))};
      </div>
    </Container>
    </Suspense>
   );
}
 
export default FavouritesClient ;