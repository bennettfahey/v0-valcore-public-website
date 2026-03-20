"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Check } from "lucide-react"
import { categories } from "@/lib/categories-data"

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [partnerAffiliation, setPartnerAffiliation] = useState<string>("")
  const [otherPartner, setOtherPartner] = useState<string>("")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [partnerAffiliations, setPartnerAffiliations] = useState<string[]>([])
  const [loadingPartners, setLoadingPartners] = useState(true)

  useEffect(() => {
    async function fetchPartners() {
      try {
        const response = await fetch("/api/subsidiaries")
        if (response.ok) {
          const data = await response.json()
          // Handle both array of strings and array of objects with name property
          const partnerNames: string[] = data.map((item: string | { name: string }) => 
            typeof item === "string" ? item : item.name
          )
          // Sort alphabetically and add "Other" at the end
          const sortedPartners = partnerNames.sort((a, b) => a.localeCompare(b))
          setPartnerAffiliations([...sortedPartners, "Other"])
        }
      } catch (err) {
        console.error("Failed to fetch partner affiliations:", err)
        // Fallback to empty with just "Other"
        setPartnerAffiliations(["Other"])
      } finally {
        setLoadingPartners(false)
      }
    }
    fetchPartners()
  }, [])

  const handleCategoryToggle = (categoryName: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryName)
        ? prev.filter((c) => c !== categoryName)
        : [...prev, categoryName]
    )
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    const data = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      company: formData.get("company") as string,
      partnerAffiliation: partnerAffiliation === "Other" ? otherPartner : partnerAffiliation,
      categoriesOfInterest: selectedCategories,
      message: formData.get("message") as string,
    }

    try {
      const response = await fetch("https://app.valcoregpo.com/api/public-signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit form")
      }

      // Redirect to invite URL if provided
      if (result.inviteUrl) {
        window.location.href = result.inviteUrl
        return
      }

      // Fallback success state
      setSubmitted(true)
    } catch (err) {
      console.error("Form submission error:", err)
      setError("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 lg:py-28 bg-primary">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Ready to see what you could save?
          </h2>
          <p className="mt-4 text-white/70 max-w-xl mx-auto">
            Get a free, no-obligation savings analysis. Share your spend data and
            we'll show you exactly where you can reduce costs.
          </p>
        </div>

        {submitted ? (
          <div className="rounded-2xl bg-white p-8 text-center">
            <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Check className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-primary mb-2">
              Thank you!
            </h3>
            <p className="text-foreground/70">
              Check your email for next steps.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="rounded-2xl bg-white p-6 lg:p-8 shadow-sm">
            {error && (
              <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm">
                {error}
              </div>
            )}
            <div className="grid gap-6">
              {/* First name + Last name */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-primary mb-2"
                  >
                    First name
                  </label>
                  <Input
                    id="firstName"
                    name="firstName"
                    required
                    className="bg-background border-border"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-primary mb-2"
                  >
                    Last name
                  </label>
                  <Input
                    id="lastName"
                    name="lastName"
                    required
                    className="bg-background border-border"
                  />
                </div>
              </div>

              {/* Work email + Phone */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-primary mb-2"
                  >
                    Work email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="bg-background border-border"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-primary mb-2"
                  >
                    Phone
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="bg-background border-border"
                  />
                </div>
              </div>

              {/* Company name */}
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-primary mb-2"
                >
                  Company name
                </label>
                <Input
                  id="company"
                  name="company"
                  required
                  className="bg-background border-border"
                />
              </div>

              {/* Partner Affiliation */}
              <div>
                <label
                  htmlFor="partnerAffiliation"
                  className="block text-sm font-medium text-primary mb-2"
                >
                  Partner Affiliation
                </label>
                <p className="text-xs text-foreground/50 mb-2">
                  Select the company that referred you, if applicable
                </p>
                <Select
                  value={partnerAffiliation}
                  onValueChange={setPartnerAffiliation}
                  disabled={loadingPartners}
                >
                  <SelectTrigger className="bg-background border-border">
                    <SelectValue placeholder={loadingPartners ? "Loading partners..." : "Select a partner (optional)"} />
                  </SelectTrigger>
                  <SelectContent>
                    {partnerAffiliations.map((partner) => (
                      <SelectItem key={partner} value={partner}>
                        {partner}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {partnerAffiliation === "Other" && (
                  <Input
                    value={otherPartner}
                    onChange={(e) => setOtherPartner(e.target.value)}
                    placeholder="Please specify the company"
                    className="mt-3 bg-background border-border"
                  />
                )}
              </div>

              {/* Categories of Interest */}
              <div>
                <label className="block text-sm font-medium text-primary mb-3">
                  Categories of Interest
                </label>
                <div className="grid gap-3 sm:grid-cols-2">
                  {categories.map((category) => (
                    <div key={category.slug} className="flex items-center gap-3">
                      <Checkbox
                        id={category.slug}
                        checked={selectedCategories.includes(category.name)}
                        onCheckedChange={() => handleCategoryToggle(category.name)}
                      />
                      <label
                        htmlFor={category.slug}
                        className="text-sm text-foreground/80 cursor-pointer"
                      >
                        {category.name}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-primary mb-2"
                >
                  Message{" "}
                  <span className="text-foreground/50 font-normal">
                    (optional)
                  </span>
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="bg-background border-border"
                  placeholder="Tell us about your purchasing needs..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-primary text-white hover:bg-primary/90"
              >
                {isSubmitting ? "Submitting..." : "Get Started"}
              </Button>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}
