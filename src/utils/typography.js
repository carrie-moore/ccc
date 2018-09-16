import Typography from "typography"
import judahTheme from "typography-theme-judah"

const typography = new Typography(
  judahTheme,
  {
    googleFonts: [
      {
        name: 'Montserrat',
        styles: [
          '300',
          '500i',
          '700',
          '800'
        ],
      }
    ],
  }
) 

export default typography