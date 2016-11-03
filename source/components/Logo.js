import React from "react"
import {PropTypes} from "react"

import {SvgElement} from "./index"

const Logo = ({theme}) => {
  if (theme === "large") {
    return (
      <SvgElement
        width="15em"
        height="5em"
        viewBox="503 127 240 75">
        <g stroke="none" transform="translate(503, 127)">
          <path d="M157.525636,28.2414286 L157.525636,62.1701429 L148.684538,62.1701429 L148.684538,59.4405714 C145.996462,61.8189286 142.743605,62.8678571 139.419257,62.8678571 C134.681762,62.8678571 130.437558,60.7016429 127.751866,57.4110714 C125.557081,54.7545714 124.284534,51.2565714 124.284534,46.2193571 L124.284534,28.2414286 L133.478324,28.2414286 L133.478324,46.5682143 C133.478324,49.6466429 134.11698,51.1858571 135.177435,52.3738571 C136.590581,53.9154286 138.570892,54.4740714 140.339112,54.4740714 C144.230625,54.4740714 147.056917,51.8859286 148.331847,50.2783571 L148.331847,28.2414286 L157.525636,28.2414286 Z" fill="#000000" />
          <polygon fill="#000000" points="108.726107 62.1701429 117.919896 62.1701429 117.919896 12.5027857 108.726107 12.5027857" />
          <path d="M166.361969,51.8152143 C168.697354,53.9154286 172.302902,55.1741429 175.76785,55.1741429 C178.243834,55.1741429 180.152654,53.9837857 180.152654,52.3055 C180.152654,47.1975714 163.533294,49.0172857 163.533294,38.1060714 C163.533294,31.598 169.898409,27.5413571 176.687705,27.5413571 C181.144001,27.5413571 186.024478,29.2196429 188.285988,30.9686429 L183.972676,37.5427143 C182.204456,36.284 179.871454,35.2374286 177.39547,35.2374286 C174.850377,35.2374286 172.727084,36.2156429 172.727084,37.9646429 C172.727084,42.3701429 189.348826,40.6235 189.348826,52.3738571 C189.348826,58.8819286 182.91222,62.8678571 175.698742,62.8678571 C170.961247,62.8678571 165.937787,61.2602857 161.908057,58.3232857 L166.361969,51.8152143 Z" fill="#000000" />
          <polygon fill="#000000" points="210.776457 43.4916714 229.662093 62.1696714 217.282171 62.1696714 202.783722 47.4776 202.783722 62.1696714 193.589932 62.1696714 193.589932 12.5023143 202.783722 12.5023143 202.783722 39.2228857 214.596479 28.2409571 227.538799 28.2409571" />
          <g transform="translate(0, 5)">
            <polygon fill="#A08EEE" points="65.2998681 0.597535714 49.9649702 15.76575 55.2052873 20.9491071 71.6101727 37.1733214 86.9426876 22.0051071" />
            <polygon fill="#00D4A8" points="38.5053808 37.4682 54.9078832 53.6924143 71.6082662 37.1735571 55.2057639 20.9493429" />
            <polygon fill="#FF6C47" points="21.8045212 20.9488714 10.5517802 32.0793 43.6546656 64.8223714 54.9074066 53.6919429 38.5049042 37.4677286" />
            <polygon fill="#FFCE3D" points="49.9654468 15.7652786 43.6551422 22.0069929 22.0123228 0.597064286 0.367120251 22.0069929 10.5522568 32.0790643 21.8049978 20.9486357 38.5053808 37.4674929 55.2057639 20.9486357" />
          </g>
        </g>
      </SvgElement>
    )
  }
  return (
    <SvgElement
      width="10em"
      height="2.6em"
      viewBox="105 66 150 39">
      <g transform="translate(105.000000, 66.000000)">
        <polygon fill="#000000" points="64.2472449 33.7823571 69.6799388 33.7823571 69.6799388 4.43346429 64.2472449 4.43346429" />
        <path d="M93.0833306,13.7335714 L93.0833306,33.7823571 L87.8590449,33.7823571 L87.8590449,32.1694286 C86.2706367,33.5748214 84.3484939,34.1946429 82.3841061,34.1946429 C79.5846776,34.1946429 77.0767388,32.9146071 75.4897388,30.9701786 C74.1928204,29.4004286 73.4408612,27.3334286 73.4408612,24.3568929 L73.4408612,13.7335714 L78.8735551,13.7335714 L78.8735551,24.5630357 C78.8735551,26.3821071 79.2509429,27.2916429 79.8775755,27.9936429 C80.7126163,28.9045714 81.8828,29.2346786 82.9276571,29.2346786 C85.2271878,29.2346786 86.8972694,27.7053214 87.6506367,26.7553929 L87.6506367,13.7335714 L93.0833306,13.7335714 Z" fill="#000000" />
        <path d="M98.3048,27.6635357 C99.6848,28.9045714 101.815351,29.6483571 103.86282,29.6483571 C105.325902,29.6483571 106.453841,28.9449643 106.453841,27.95325 C106.453841,24.9349286 96.6333102,26.0102143 96.6333102,19.5626786 C96.6333102,15.717 100.394514,13.3198929 104.406371,13.3198929 C107.039637,13.3198929 109.923555,14.3116071 111.259902,15.3451071 L108.711127,19.2297857 C107.666269,18.486 106.287678,17.8675714 104.824596,17.8675714 C103.320678,17.8675714 102.066004,18.4456071 102.066004,19.4791071 C102.066004,22.0823571 111.887943,21.05025 111.887943,27.9936429 C111.887943,31.8393214 108.084494,34.1946429 103.821984,34.1946429 C101.022555,34.1946429 98.0541469,33.2447143 95.6729429,31.5092143 L98.3048,27.6635357 Z" fill="#000000" />
        <polygon fill="#000000" points="124.549724 22.7450786 135.709418 33.7820786 128.39401 33.7820786 119.826745 25.1004 119.826745 33.7820786 114.394051 33.7820786 114.394051 4.43318571 119.826745 4.43318571 119.826745 20.2226143 126.80701 13.7332929 134.454745 13.7332929" />
        <polygon fill="#A08EEE" points="38.5862857 0.353089286 29.5247551 9.316125 32.6213061 12.3790179 42.315102 21.9660536 51.3752245 13.0030179" />
        <polygon fill="#00D4A8" points="22.7531796 22.1403 32.4455673 31.7273357 42.3139755 21.9661929 32.6215878 12.3791571" />
        <polygon fill="#FF6C47" points="12.8844898 12.3788786 6.23514286 18.95595 25.7959388 38.3041286 32.4452857 31.7270571 22.752898 22.1400214" />
        <polygon fill="#FFCE3D" points="29.5250367 9.31584643 25.7962204 13.0041321 13.0072816 0.352810714 0.216934694 13.0041321 6.23542449 18.9558107 12.8847714 12.3787393 22.7531796 22.1398821 32.6215878 12.3787393" />
      </g>
    </SvgElement>
  )
}

Logo.propTypes = {
  theme: PropTypes.oneOf(["large"]),
}

export default Logo