import * as React from "react";
import {
  Footer,
  FooterTop,
  Row,
  Column,
  FooterSection,
  List,
  ListItem,
  Link,
  Paragraph,
} from "@amsterdam/asc-ui";

const GGWFooter = () => {
  return (
    <Footer>
      <FooterTop>
        <Row>
          <Column
            wrap
            span={{
              small: 1,
              medium: 2,
              big: 2,
              large: 4,
              xLarge: 4,
            }}
          >
            <FooterSection title="Some page links">
              <List>
                <ListItem>
                  <Link darkBackground href="/" inList>
                    Lorem ipsum.
                  </Link>
                </ListItem>
                <ListItem>
                  <Link darkBackground href="/" inList>
                    Lorem ipsum dolor.
                  </Link>
                </ListItem>
                <ListItem>
                  <Link darkBackground href="/" inList>
                    Lorem.
                  </Link>
                </ListItem>
                <ListItem>
                  <Link darkBackground href="/" inList>
                    Lorem ipsum dolor sit.
                  </Link>
                </ListItem>
              </List>
            </FooterSection>
          </Column>
          <Column
            wrap
            span={{
              small: 1,
              medium: 2,
              big: 2,
              large: 4,
              xLarge: 4,
            }}
          >
            <FooterSection title="Some share links">
              <List>
                <ListItem>
                  <Link darkBackground href="/" inList>
                    Lorem ipsum dolor sit.
                  </Link>
                </ListItem>
                <ListItem>
                  <Link darkBackground href="/" inList>
                    Lorem.
                  </Link>
                </ListItem>
                <ListItem>
                  <Link darkBackground href="/" inList>
                    Lorem ipsum.
                  </Link>
                </ListItem>
                <ListItem>
                  <Link darkBackground href="/" inList>
                    Lorem ipsum.
                  </Link>
                </ListItem>
                <ListItem>
                  <Link darkBackground href="/" inList>
                    Lorem ipsum dolor sit amet.
                  </Link>
                </ListItem>
              </List>
            </FooterSection>
          </Column>
          <Column
            wrap
            span={{
              small: 1,
              medium: 2,
              big: 2,
              large: 4,
              xLarge: 4,
            }}
          >
            <FooterSection title="Questions?">
              <Paragraph gutterBottom={8}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Commodi dolor doloremque ea eos facere hic ipsum nobis provident
                quidem voluptates.
              </Paragraph>
              <List>
                <ListItem>
                  <Link darkBackground href="/" inList>
                    Lorem ipsum dolor.
                  </Link>
                </ListItem>
                <ListItem>
                  <Link darkBackground href="/" inList>
                    Lorem ipsum dolor sit.
                  </Link>
                </ListItem>
                <ListItem>
                  <Link darkBackground href="/" inList>
                    Lorem.
                  </Link>
                </ListItem>
                <ListItem>
                  <Link darkBackground href="/" inList>
                    Lorem ipsum.
                  </Link>
                </ListItem>
              </List>
            </FooterSection>
          </Column>
        </Row>
      </FooterTop>
    </Footer>
  );
};

export default GGWFooter;
