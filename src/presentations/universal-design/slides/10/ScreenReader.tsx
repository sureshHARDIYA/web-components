import { CodePane, Image } from "spectacle";

import Screens from "./screen.jpg";
import { customTheme } from "@/slides/7/customTheme";

const ScreenReaders = () => {
  return (
    <div className="">
      <p-tabs size="medium">
        <p-tabs-item label="Screen Readers">
          <p-text size="medium">
            Screen readers convert digital text into synthesized speech. They
            empower users to hear content and navigate with the keyboard.
          </p-text>
        </p-tabs-item>
        <p-tabs-item label="What does it read?">
          <p-text size="medium">
            Screen Readers:
            <p-text-list>
              <p-text-list-item>Read all content</p-text-list-item>
              <p-text-list-item>Display a list of links</p-text-list-item>
              <p-text-list-item>Display a list of headings</p-text-list-item>
              <p-text-list-item>
                Read image descriptions (alt text)
              </p-text-list-item>
              <p-text-list-item>
                Announce button labels and roles
              </p-text-list-item>
              <p-text-list-item>
                Indicate form field labels and states (e.g., required, invalid)
              </p-text-list-item>
              <p-text-list-item>
                Navigate by landmarks (main, navigation, banner, footer)
              </p-text-list-item>
              <p-text-list-item>
                Report table structure and headers
              </p-text-list-item>
              <p-text-list-item>
                Convey ARIA live region updates (e.g., for notifications)
              </p-text-list-item>
            </p-text-list>
          </p-text>
        </p-tabs-item>

        <p-tabs-item label="Popular Screen Readers">
          <div className="grid grid-cols-2 gap-8">
            <Image src={Screens} className="pb-4" />

            <div>
              <table className="min-w-full border border-gray-300 text-left text-sm">
                <thead className="bg-gray-100 text-gray-700 font-semibold">
                  <tr>
                    <th className="border-b border-gray-300 px-4 py-2">
                      Platform
                    </th>
                    <th className="border-b border-gray-300 px-4 py-2">
                      Screen Reader Name
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-800">
                  <tr className="even:bg-gray-50">
                    <td className="border-b border-gray-200 px-4 py-2">iOS</td>
                    <td className="border-b border-gray-200 px-4 py-2">
                      VoiceOver
                    </td>
                  </tr>
                  <tr className="even:bg-gray-50">
                    <td className="border-b border-gray-200 px-4 py-2">
                      macOS
                    </td>
                    <td className="border-b border-gray-200 px-4 py-2">
                      VoiceOver
                    </td>
                  </tr>
                  <tr className="even:bg-gray-50">
                    <td className="border-b border-gray-200 px-4 py-2">
                      Android
                    </td>
                    <td className="border-b border-gray-200 px-4 py-2">
                      TalkBack
                    </td>
                  </tr>
                  <tr className="even:bg-gray-50">
                    <td className="border-b border-gray-200 px-4 py-2">
                      Windows
                    </td>
                    <td className="border-b border-gray-200 px-4 py-2">
                      Narrator
                    </td>
                  </tr>
                  <tr className="even:bg-gray-50">
                    <td className="border-b border-gray-200 px-4 py-2">
                      Windows (3rd-party)
                    </td>
                    <td className="border-b border-gray-200 px-4 py-2">
                      NVDA (NonVisual Desktop Access)
                    </td>
                  </tr>
                  <tr className="even:bg-gray-50">
                    <td className="border-b border-gray-200 px-4 py-2">
                      Windows (3rd-party)
                    </td>
                    <td className="border-b border-gray-200 px-4 py-2">
                      JAWS (Job Access With Speech)
                    </td>
                  </tr>
                  <tr className="even:bg-gray-50">
                    <td className="border-b border-gray-200 px-4 py-2">
                      Linux
                    </td>
                    <td className="border-b border-gray-200 px-4 py-2">Orca</td>
                  </tr>
                  <tr className="even:bg-gray-50">
                    <td className="border-b border-gray-200 px-4 py-2">
                      Chrome OS
                    </td>
                    <td className="border-b border-gray-200 px-4 py-2">
                      ChromeVox
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </p-tabs-item>

        <p-tabs-item label="Alternative Text">
          <div className="flex w-full items-center mb-4">
            <p-icon></p-icon> By default, when a screen reader encounters an
            image, if it can't find alt text it will read aloud the file's name.
          </div>
          <CodePane language="html" theme={customTheme}>
            {`
            <!-- Screen reader will read the filename "image.jpg" 
            or may announce it as "graphic" depending on the browser/screen reader -->
            <img src="image.jpg">

            <!-- Screen reader will read: "a puppy in the park" -->
            <img src="image.jpg" alt="a puppy in the park">

            <!-- Screen reader will skip this image entirely -->
            <img src="image.jpg" alt="">

            `}
          </CodePane>
        </p-tabs-item>
      </p-tabs>
    </div>
  );
};

export default ScreenReaders;
