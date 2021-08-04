interface SpacerProps {
  width: number | string;
  mWidth?: number | string | null;
  xWidth?: number | string | null;
  height: number | string;
  mHeight?: number | string | null;
  xHeight?: number | string | null;
  customStyle?: Object;
}

const Spacer = (props: SpacerProps) => {
  const randomString: string =
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15);

  const typeProps = (item: number | string) =>
    typeof item === 'number' ? `${item}px` : item;
  return (
    <>
      <div className={`spacer-${randomString}`}></div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .spacer-${randomString} {
            width: ${typeProps(props.width)};
            height: ${typeProps(props.height)};
            background: red;
        }
        @media (min-width: 768px) {
            .spacer-${randomString} {
                width: ${
                  props.mWidth
                    ? typeProps(props.mWidth)
                    : typeProps(props.width)
                };
                height: ${
                  props.mHeight
                    ? typeProps(props.mHeight)
                    : typeProps(props.height)
                };
            }
        }
        @media (min-width: 1024px) {
            .spacer-${randomString} {
                width: ${
                  props.xWidth
                    ? typeProps(props.xWidth)
                    : props.mWidth
                    ? typeProps(props.mWidth)
                    : typeProps(props.width)
                };
                height: ${
                  props.xHeight
                    ? typeProps(props.xHeight)
                    : props.mHeight
                    ? typeProps(props.mHeight)
                    : typeProps(props.height)
                };
            }
        }
        `
        }}></style>
    </>
  );
};

Spacer.defaultProps = {
  width: 'auto',
  height: 'auto'
};

export default Spacer;
