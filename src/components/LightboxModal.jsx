import Gallery from "./Gallery";

export default function LightboxModal() {

  return (
    <div className="lightbox-container">
      <div className="lightbox-modal" >
        <Gallery controls={true}/>
      </div>
    </div>
  );
}
