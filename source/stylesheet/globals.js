import { oneLineTrim } from "common-tags";

export default oneLineTrim`
  @keyframes dropdown-button-open {
    from {
      transform: scale(.85) translateY(.2rem);
      opacity: 0;
    }
    to {
      transform: scale(1) translateY(.2rem);
      opacity: 1;
    }
  }

  @keyframes notification-slide-in {
    from {
      transform: translateY(5rem);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes run {
    0% {
      transform-origin: 36px 36px ;
    }
    70% {
      transform-origin: 36px 36px ;
      transform: rotate(360deg);
    }
    100% {
      transform-origin: 36px 36px;
      transform: rotate(360deg);
    }
  }
`;
