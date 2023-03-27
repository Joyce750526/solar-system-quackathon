export default function InfoBox() {
  return (
    <div className='container'>
      <div className='tab-container'>
        <ul className='tabs'>
          <li>Size</li>
          <li>Distance</li>
          <li>Facts</li>
          <li>Gas/Solid</li>
          <li>Moons</li>
        </ul>
        <div className='tab-content'>
          <div className='size'>Size content</div>
          <div className='distance'>Distance content</div>
          <div className='facts'>Facts content</div>
          <div className='state'>Gas/solid content</div>
          <div className='moons'>Moon(s) content</div>
        </div>
      </div>
    </div>
  );
}
