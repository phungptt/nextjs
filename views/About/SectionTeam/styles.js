import { SectionGrey } from 'components/theme/styles';
import { breakpoint } from 'constant';
import { px2vw } from 'helper';
import styled from 'styled-components';

const SectionTeamWrap = styled(SectionGrey)`
  padding: 100px 0;

  @media (min-width: ${breakpoint.lg}) {
    padding: ${px2vw(130)} 0;
  }
`;

const TeamList = styled.div`
  margin-top: 50px;

  img {
    width: 100%;
    object-fit: contain;
  }

  @media (min-width: ${breakpoint.lg}) {
    margin-top: ${px2vw(70)};

    img {
      width: ${px2vw(301)};
    }
  }
`;
const TeamItem = styled.div`
  padding: 0 15px;

  @media (min-width: ${breakpoint.lg}) {
    padding: 0;
  }
`;

const TeamContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 20px;

  @media (min-width: ${breakpoint.lg}) {
    width: ${px2vw(301)};
    margin-top: ${px2vw(32)};
  }
`;

export { SectionTeamWrap, TeamList, TeamContent, TeamItem };
