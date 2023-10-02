import AutoGridOverflow from 'pages/AutoGridOverflow';
import AutoGridWrap from 'pages/AutoGridWrap';
import EasyResponsive from 'pages/EasyResponsive';
import FlexBasis from 'pages/FlexBasis';
import GridAutoHeight from 'pages/GridAutoHeight';
import NthChild from 'pages/NthChild';
import TextWrapBalance from 'pages/TextWrapBalance';
import WidthAuto100 from 'pages/WidthAuto100';
import { Route, Routes } from 'react-router-dom';

const RootRoutes = () => {
  return (
    <Routes>
      <Route path="/grid-auto-height" element={<GridAutoHeight />} />
      <Route path="/flex-basis" element={<FlexBasis />} />
      <Route path="/easy-responsive" element={<EasyResponsive />} />
      <Route path="/nth-child" element={<NthChild />} />
      <Route path="/text-wrap-balance" element={<TextWrapBalance />} />
      <Route path="/width-auto-100" element={<WidthAuto100 />} />
      <Route path="/auto-grid-wrap" element={<AutoGridWrap />} />
      <Route path="/auto-grid-overflow" element={<AutoGridOverflow />} />
    </Routes>
  );
};
export default RootRoutes;