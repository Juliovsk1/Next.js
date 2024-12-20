import NextLink from "next/link";

export default function Link({ children, href, ...props}) {
    return (
        (<NextLink href={href} passhref {...props} legacyBehavior>
            {children}
        </NextLink>)
    );
}