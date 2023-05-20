import { ArrowUpIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";
import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function ScrollTop() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      {scrollPosition > 500 && (
        <Link href="#phrase-of-the-day" scroll={false}>
          <Box
            position="fixed"
            bottom="20px"
            right={["16px", "84px"]}
            zIndex={1}
            background={"green.600"}
            padding={3}
            rounded={5}
          >
            <ArrowUpIcon color={"gray.100"} />{" "}
          </Box>
        </Link>
      )}
    </div>
  );
}
