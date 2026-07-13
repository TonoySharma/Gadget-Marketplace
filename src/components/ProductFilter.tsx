"use client";

import React, { FormEvent, useState } from "react";
import {
    Select,
    Label,
    Header,
    ListBox,
    InputGroup,
    TextField,
    Button,
} from "@heroui/react";
import FadeUp from "./FadeUp";
import { useRouter } from "next/navigation";

const ProductFilter = () => {
    const router = useRouter();

    const [search, setSearch] = useState<string>("");
    const [selectedCategory, setSelectedCategory] = useState<string>("All");
    const [selectedPriceRange, setSelectedPriceRange] =
        useState<string>("all");

    const CATEGORIES: string[] = [
        "All",
        "Smartphones",
        "Laptops",
        "Tablets",
        "Accessories",
        "Smart Watch",
    ];

    const PRICE_RANGES = [
        { label: "All Prices", value: "all" },
        { label: "Under $200", value: "0-200" },
        { label: "$200 - $500", value: "200-500" },
        { label: "Above $500", value: "500-above" },
    ];

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const params = new URLSearchParams();

        if (search) {
            params.set("search", search);
        }

        if (selectedCategory !== "All") {
            params.set("category", selectedCategory);
        }

        switch (selectedPriceRange) {
            case "0-200":
                params.set("minPrice", "0");
                params.set("maxPrice", "200");
                break;

            case "200-500":
                params.set("minPrice", "200");
                params.set("maxPrice", "500");
                break;

            case "500-above":
                params.set("minPrice", "500");
                break;
        }

        router.push(`/browse-products?page=1&${params.toString()}`);
    };

    return (
        <FadeUp>
            <form
                onSubmit={onSubmit}
                style={{
                    display: "flex",
                    gap: "16px",
                    flexWrap: "wrap",
                    alignItems: "flex-end",
                    padding: "16px",
                    background: "#f9f9f9",
                    borderRadius: "8px",
                    width: "100%",
                    boxSizing: "border-box",
                }}
            >
                {/* Search */}
                <div style={{ flex: "1 1 250px", width: "100%" }}>
                    <TextField
                        value={search}
                        onChange={(value: string) => setSearch(value)}
                        style={{ width: "100%" }}
                    >
                        <Label>Search Products</Label>

                        <InputGroup style={{ width: "100%" }}>
                            <InputGroup.Prefix>🔍</InputGroup.Prefix>

                            <InputGroup.Input
                                name="search"
                                placeholder="Search by title or brand..."
                                style={{ width: "100%" }}
                            />
                        </InputGroup>
                    </TextField>
                </div>

                {/* Category */}
                <div style={{ flex: "1 1 200px", width: "100%" }}>
                    <Select
                        selectedKey={selectedCategory}
                        onSelectionChange={(key) =>
                            setSelectedCategory(key as string)
                        }
                    >
                        <Label>Category</Label>

                        <Select.Trigger style={{ width: "100%" }}>
                            <Select.Value>
                                {selectedCategory || "Select Category"}
                            </Select.Value>
                            <Select.Indicator />
                        </Select.Trigger>

                        <Select.Popover>
                            <ListBox>
                                <ListBox.Section>
                                    <Header>Select Category</Header>

                                    {CATEGORIES.map((category) => (
                                        <ListBox.Item
                                            key={category}
                                            id={category}
                                            textValue={category}
                                        >
                                            <Label>{category}</Label>
                                        </ListBox.Item>
                                    ))}
                                </ListBox.Section>
                            </ListBox>
                        </Select.Popover>
                    </Select>
                </div>

                {/* Price */}
                <div style={{ flex: "1 1 200px", width: "100%" }}>
                    <Select
                        selectedKey={selectedPriceRange}
                        onSelectionChange={(key) =>
                            setSelectedPriceRange(key as string)
                        }
                    >
                        <Label>Price Range</Label>

                        <Select.Trigger style={{ width: "100%" }}>
                            <Select.Value>
                                {PRICE_RANGES.find(
                                    (item) => item.value === selectedPriceRange
                                )?.label || "All Prices"}
                            </Select.Value>

                            <Select.Indicator />
                        </Select.Trigger>

                        <Select.Popover>
                            <ListBox>
                                <ListBox.Section>
                                    <Header>Select Price</Header>

                                    {PRICE_RANGES.map((item) => (
                                        <ListBox.Item
                                            key={item.value}
                                            id={item.value}
                                            textValue={item.label}
                                        >
                                            <Label>{item.label}</Label>
                                        </ListBox.Item>
                                    ))}
                                </ListBox.Section>
                            </ListBox>
                        </Select.Popover>
                    </Select>
                </div>

                {/* Button */}
                <div
                    style={{
                        flex: "1 1 auto",
                        width: "100%",
                        minWidth: "120px",
                    }}
                >
                    <Button
                        type="submit"
                        color="primary"
                        style={{ width: "100%", height: "40px" }}
                    >
                        Search
                    </Button>
                </div>
            </form>
        </FadeUp>
    );
};

export default ProductFilter;