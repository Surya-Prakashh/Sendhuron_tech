import React from "react";
import "./Clients.css";

const Clients = () => {
  const clientLogos = [
    { name: "Coca-Cola", src: "https://s3-alpha-sig.figma.com/img/3419/1669/408b0936791882ce30b18ede04ec338b?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=EQGoc-y1DU838Bdkit8XzNrLZKU7zZ8--40saMgIjoV--Tc8Ss6C5~JfAyVQ-fJfGryCJ2kp2KqE8xN-S~dA1x8CUFWLN0PP--HYhpWjM861KocJgUi3JW0R8aWZE1moN3bznI-d7IQkQrqBLEWaMq4uadCz4ibtIcHJrwRBBUiu4Lhd4hHMBhAY1lZdFUxN07xvbIQj4CUlOQiE6mAfYaio5S6zDssaxxDiKYdQHniMhwY69paGF8vRtZkYuj3G~LbgO-kefPPVnv0p62j8R~8DTF9Uv1JiZFFcKDLziqoTDPym6S03d~-8gcFEgTUrh7OyOQ4wNt1khmFDtxQJrg__" },
    { name: "eBay", src: "https://fineproxy.org/wp-content/uploads/2023/07/ebay.de_logo-2048x1152.png" },
    { name: "FedEx", src: "https://s3-alpha-sig.figma.com/img/3419/1669/408b0936791882ce30b18ede04ec338b?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=EQGoc-y1DU838Bdkit8XzNrLZKU7zZ8--40saMgIjoV--Tc8Ss6C5~JfAyVQ-fJfGryCJ2kp2KqE8xN-S~dA1x8CUFWLN0PP--HYhpWjM861KocJgUi3JW0R8aWZE1moN3bznI-d7IQkQrqBLEWaMq4uadCz4ibtIcHJrwRBBUiu4Lhd4hHMBhAY1lZdFUxN07xvbIQj4CUlOQiE6mAfYaio5S6zDssaxxDiKYdQHniMhwY69paGF8vRtZkYuj3G~LbgO-kefPPVnv0p62j8R~8DTF9Uv1JiZFFcKDLziqoTDPym6S03d~-8gcFEgTUrh7OyOQ4wNt1khmFDtxQJrg__" },
   
    { name: "Google", src: "https://fineproxy.org/wp-content/uploads/2023/07/ebay.de_logo-2048x1152.png" },
    { name: "Amazon", src: "https://s3-alpha-sig.figma.com/img/3419/1669/408b0936791882ce30b18ede04ec338b?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=EQGoc-y1DU838Bdkit8XzNrLZKU7zZ8--40saMgIjoV--Tc8Ss6C5~JfAyVQ-fJfGryCJ2kp2KqE8xN-S~dA1x8CUFWLN0PP--HYhpWjM861KocJgUi3JW0R8aWZE1moN3bznI-d7IQkQrqBLEWaMq4uadCz4ibtIcHJrwRBBUiu4Lhd4hHMBhAY1lZdFUxN07xvbIQj4CUlOQiE6mAfYaio5S6zDssaxxDiKYdQHniMhwY69paGF8vRtZkYuj3G~LbgO-kefPPVnv0p62j8R~8DTF9Uv1JiZFFcKDLziqoTDPym6S03d~-8gcFEgTUrh7OyOQ4wNt1khmFDtxQJrg__" },
  ];

  return (
    <section className="clients-section">
      <h2>Selected Clients</h2>
      <div className="clients-logos">
        {clientLogos.map((client, index) => (
          <img
            key={index}
            src={client.src}
            alt={client.name}
            className="client-logo"
          />
        ))}
      </div>
    </section>
  );
};

export default Clients;
