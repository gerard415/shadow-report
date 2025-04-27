const page = () => {

    return (
        <div className="min-h-screen bg-black flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h1 className="text-center text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-2">
            Contact Us
            </h1>
            <h2 className="text-center text-sm text-neutral-400">
            Leave us a message
            </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-neutral-900/50 backdrop-blur-sm py-8 px-4 shadow-xl border border-neutral-800 rounded-xl sm:px-10">
                <form method='POST' action="https://getform.io/f/f20eae9f-47a5-409f-90d5-c6b881d85286" className="space-y-6" >
                <div>
                    <label
                        htmlFor="name"
                        className="block text-sm font-medium text-neutral-300"
                    >
                        Full Name
                    </label>
                    <div className="mt-1">
                        <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-neutral-800 rounded-lg bg-neutral-900 placeholder-neutral-500 text-neutral-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/20"
                        placeholder="Enter your full name"
                        />
                    </div>
                    </div>
                    <div>
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-neutral-300"
                    >
                        Email address
                    </label>
                    <div className="mt-1">
                        <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-neutral-800 rounded-lg bg-neutral-900 placeholder-neutral-500 text-neutral-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/20"
                        placeholder="Enter your email"
                        />
                    </div>
                    </div>

                    <div>
                        <label
                            htmlFor="message"
                            className="block text-sm font-medium text-neutral-300"
                        >
                            Message
                        </label>
                    <div className="mt-1">
                        <textarea
                        id="message"
                        name="message"
                        required
                        rows={10}
                        className="appearance-none block w-full px-3 py-2 border border-neutral-800 rounded-lg bg-neutral-900 placeholder-neutral-500 text-neutral-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/20"
                        placeholder="Enter your message"
                        />
                    </div>
                    </div>
                    <div>
                    <button
                        type="submit"
                        className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                        Send Message
                    </button>
                    </div>
                </form>
            </div>
        </div>
        </div>
    )
}

export default page