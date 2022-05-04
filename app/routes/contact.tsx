import type {
  ActionFunction,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Form, Link, useActionData, useSearchParams } from "@remix-run/react";
import * as React from "react";

import { createUserSession, getUserId } from "~/session.server";
import { verifyLogin } from "~/models/user.server";
import { safeRedirect, validateEmail } from "~/utils";
import { Layout } from "~/components";

export const loader: LoaderFunction = async ({ request }) => {
  const userId = await getUserId(request);
  if (userId) return redirect("/");
  return json({});
};

interface ActionData {
  errors?: {
    email?: string;
    name?: string;
    message?: string;
  };
}

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const redirectTo = safeRedirect(formData.get("redirectTo"), "/notes");
  const remember = formData.get("remember");

  if (!validateEmail(email)) {
    return json<ActionData>(
      { errors: { email: "Email is invalid" } },
      { status: 400 }
    );
  }

  if (typeof name !== "string") {
    return json<ActionData>(
      { errors: { name: "Name is required" } },
      { status: 400 }
    );
  }

  return createUserSession({
    request,
    userId: "user.id",
    remember: remember === "on" ? true : false,
    redirectTo,
  });
};

export const meta: MetaFunction = () => {
  return {
    title: "Contact",
  };
};

export default function ContactPage() {
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") || "/notes";
  const actionData = useActionData() as ActionData;
  const emailRef = React.useRef<HTMLInputElement>(null);
  const nameRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);
  const messageRef = React.useRef<HTMLTextAreaElement>(null);

  React.useEffect(() => {
    if (actionData?.errors?.email) {
      emailRef.current?.focus();
    } else if (actionData?.errors?.name) {
      passwordRef.current?.focus();
    }
  }, [actionData]);

  return (
    <Layout>
      <main className="container grid grid-cols-12">
        <div className="lg:py-18 relative col-span-full rounded-md bg-brand-light px-8 py-16 before:absolute before:-top-80 before:-left-72 before:-z-10 before:h-[575px] before:w-[634px] before:bg-[url('/images/circles-vector.svg')] after:absolute after:-right-32 after:-bottom-[245px]  after:-z-10 after:h-[672px] after:w-[575px] after:bg-[url('/images/circles-solid.svg')] after:bg-no-repeat md:col-span-6 md:col-start-4 md:px-14 lg:after:block xl:py-24 xl:px-28">
          <h2 className="pb-8 text-3xl font-semibold md:text-4xl">
            I can't wait to hear from you!
          </h2>
          <Form method="post" className="max-w-2xl space-y-6">
            <div>
              <label htmlFor="name" className="block font-normal text-primary">
                Name
              </label>
              <div className="mt-1">
                <input
                  ref={nameRef}
                  id="name"
                  required
                  name="name"
                  type="text"
                  aria-invalid={actionData?.errors?.name ? true : undefined}
                  aria-describedby="name-error"
                  className="w-full rounded border border-gray-500 px-2 py-1 text-lg"
                />
                {actionData?.errors?.name && (
                  <div className="pt-1 text-red-700" id="name-error">
                    {actionData.errors.name}
                  </div>
                )}
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block font-normal text-primary">
                Email address
              </label>
              <div className="mt-1">
                <input
                  ref={emailRef}
                  id="email"
                  required
                  name="email"
                  type="email"
                  autoComplete="email"
                  aria-invalid={actionData?.errors?.email ? true : undefined}
                  aria-describedby="email-error"
                  className="w-full rounded border border-gray-500 px-2 py-1 text-lg"
                />
                {actionData?.errors?.email && (
                  <div className="pt-1 text-red-700" id="email-error">
                    {actionData.errors.email}
                  </div>
                )}
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block font-normal text-primary"
              >
                Message
              </label>
              <div className="mt-1">
                <textarea
                  ref={messageRef}
                  id="message"
                  required
                  name="message"
                  aria-invalid={actionData?.errors?.message ? true : undefined}
                  aria-describedby="message-error"
                  className="w-full rounded border border-gray-500 px-2 py-1 text-lg"
                />
                {actionData?.errors?.message && (
                  <div className="pt-1 text-red-700" id="message-error">
                    {actionData.errors.message}
                  </div>
                )}
              </div>
            </div>
            <input type="hidden" name="redirectTo" value={redirectTo} />
            <button
              type="submit"
              className="w-full rounded bg-primary  py-2 px-4 text-white hover:bg-primary-dark focus:bg-primary-dark"
            >
              Say Hello{" "}
              <span aria-label="waving hand" role="img">
                👋
              </span>
            </button>
            <div>
              <small>All fields are required.</small>
            </div>
          </Form>
        </div>
      </main>
    </Layout>
  );
}
