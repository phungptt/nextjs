// import React from 'react';
// import {
//   SocialList,
//   SocialIcon
// } from './style';
// import { socials } from 'constant';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// export default function SocialMedia() {
//     return (
//         <SocialList>
//             {socials.slice(0,3).map((item, index) => (
//                 <SocialIcon
//                     key={index}
//                     onClick={() => window.open(item.link, '_blank')}
//                 >
//                     <FontAwesomeIcon icon={item.icon} />
//                 </SocialIcon>
//             ))}
//         </SocialList>
//     );
// }

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import {
  Wrapper,
  SocialList,
  SocialButton,
  SocialButtonSecondary,
  SocialButtonContent,
  SocialIcon
} from './styles';

const SocialMedia = ({ data }) => {
  useEffect(() => {
    var shareButtons = document.querySelectorAll('.social-share-button');
    if (shareButtons) {
      [].forEach.call(shareButtons, function (button) {
        button.addEventListener('click', function (event) {
          var width = 650,
            height = 450;
          event.preventDefault();
          window.open(
            this.href,
            'Share Dialog',
            'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=' +
              width +
              ',height=' +
              height +
              ',top=' +
              (screen.height / 2 - height / 2) +
              ',left=' +
              (screen.width / 2 - width / 2)
          );
        });
      });
    }
  }, []);

  return (
    <Wrapper>
      <SocialList>
        <SocialButton
          className="social-share-button"
          href={`https://www.facebook.com/sharer/sharer.php?u=${process.env.WEBSITE_URL}/blog/${data.id}`}
        >
          <SocialIcon>
            <FontAwesomeIcon icon={['fab', 'facebook-f']} />
          </SocialIcon>
          <SocialButtonSecondary>
            <SocialButtonContent>share on facebook</SocialButtonContent>
          </SocialButtonSecondary>
        </SocialButton>
        <SocialButton
          className="social-share-button"
          href={`https://twitter.com/share?url=${process.env.WEBSITE_URL}/blog/${data.id}`}
        >
          <SocialIcon>
            <FontAwesomeIcon icon={['fab', 'twitter']} />
          </SocialIcon>
          <SocialButtonSecondary>
            <SocialButtonContent>share on twitter</SocialButtonContent>
          </SocialButtonSecondary>
        </SocialButton>
        <SocialButton
          className="social-share-button"
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${process.env.WEBSITE_URL}/blog/${data.id}`}
        >
          <SocialIcon>
            <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
          </SocialIcon>
          <SocialButtonSecondary>
            <SocialButtonContent>share on linkedin</SocialButtonContent>
          </SocialButtonSecondary>
        </SocialButton>
      </SocialList>
    </Wrapper>
  );
};
export default SocialMedia;
