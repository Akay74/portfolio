import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;

export const TitleSubText = styled.p`
  font-size: 45px;
  margin: .5rem 0 .5rem;
  font-weight: 400;
  line-height: 50px;
  width: 100%;
  color: linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%);

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 45px;
    width: 100%;
    margin-top: 10px;
    line-height: 42px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    font-size: 35px;
    line-height: 40px;  
    margin: 2rem 0 .5rem;
  }
`
export const SmallHeroText = styled.p`
  font-size: 25px;
  font-weight: 500px;
  color: #1e81b0;
  padding: 15px 0 15px;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 20px;
  }
`