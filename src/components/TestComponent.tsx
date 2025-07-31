import GlassSurface from '../blocks/Components/GlassSurface/GlassSurface';

console.log('GlassSurface:', GlassSurface);

export default function TestComponent() {
  return (
    <div>
      <h1>Test</h1>
      <GlassSurface width={200} height={100}>
        <div>Test content</div>
      </GlassSurface>
    </div>
  );
}
