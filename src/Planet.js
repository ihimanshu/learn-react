export const Planet = ({ name, isGasPlanet }) => {
  return <>{isGasPlanet && <div>{name}</div>}</>;
};
