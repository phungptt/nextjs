import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import Text from 'components/Text';
import { Colors, FontFamily } from 'components/theme';
import { youtubeUrl2Id } from 'helper';
import {
  StyledCointainer,
  MainBanner,
  BannerContent,
  CircletypeAnimation,
  Mouse,
  VideoPlayBtn
} from './styles';

export default function Banner({ data }) {
  const { bannerUrl, heroWelcome, heroText, videoUrl } = data;
  const [isOpen, setOpen] = useState(false);

  return (
    <MainBanner bannerUrl={bannerUrl}>
      <StyledCointainer>
        <BannerContent>
          <Text color={Colors.greenishTeal} size="smallMedium" fontWeight={600}>
            {heroWelcome}
          </Text>
          <Text
            fontFamily={FontFamily.montserrat}
            color={Colors.white}
            size="bigTitle"
            fontWeight={600}
            lineHeight={1.17}
            whiteSpace="pre-line"
          >
            {heroText}
          </Text>
        </BannerContent>
        <VideoPlayBtn onClick={() => setOpen(true)}>
          <img src="/static/images/icons/ic-play.svg" alt="play-btn" />
          <CircletypeAnimation>
            <img
              src="/static/images/icons/ic-play-animation.svg"
              alt="play-btn-animation"
            />
          </CircletypeAnimation>
        </VideoPlayBtn>
        <ModalVideo
          channel="youtube"
          autoplay={1}
          isOpen={isOpen}
          videoId={youtubeUrl2Id(videoUrl)}
          onClose={() => setOpen(false)}
        />
        <Mouse />
      </StyledCointainer>
    </MainBanner>
  );
}
