function getStepContent(getSteps) {
  switch (getSteps) {
    case 0:
      return <Originator onChange={() => setValue(0)} />;
    case 1:
      return <BeneInfo onChange={() => setValue(1)} />;
    case 2:
      return <BeneInfo />;
    case 3:
      return <Originator2 />;
    default:
      throw new Error("Unknown step");
  }
}
<StyledTabs value={value} centered>
  <StyledTab label="Originator VASP" value={0} />
  <StyledTab label="Beneficiary Info" value={1} />
</StyledTabs>;
