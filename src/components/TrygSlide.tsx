import { Heading, Slide, Link } from "spectacle";

export const TrygSlide = ({
  children,
  title,
  readMoreLink,
  hideBackground = false,
  titlePadding = "3rem",
}: any) => {
  return (
    <Slide
      backgroundColor="white"
      {...(!hideBackground && {
        backgroundImage: "url(https://play.tailwindcss.com/img/beams.jpg)",
      })}
    >
      {title && (
        <Heading margin="0px" padding={titlePadding} fontSize="42px">
          {title}
          {readMoreLink && (
            <Link
              href={readMoreLink}
              style={{
                fontSize: "14px",
                marginLeft: "1rem",
                color: "#dc0000",
              }}
              target="_blank"
            >
              [Read More...]
            </Link>
          )}
        </Heading>
      )}
      {children}
    </Slide>
  );
};
