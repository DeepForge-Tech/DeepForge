#include <iostream>
#include <string>
#include "curl/curl.h"
#include "json/json.h"

size_t WriteCallback(void* contents, size_t size, size_t nmemb, void* userp)
{
    ((std::string*)userp)->append((char*)contents, size * nmemb);
    return size * nmemb;
}

void sendJsonToApi(const std::string& url, const Json::Value& jsonData)
{
    CURL* curl;
    CURLcode res;
    std::string readBuffer;

    curl_global_init(CURL_GLOBAL_DEFAULT);
    curl = curl_easy_init();

    if (curl) {
        curl_easy_setopt(curl, CURLOPT_URL, url.c_str());
        curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, WriteCallback);
        curl_easy_setopt(curl, CURLOPT_WRITEDATA, &readBuffer);
        std::string jsonDataStr = jsonData.toStyledString();
        curl_easy_setopt(curl, CURLOPT_POSTFIELDS, jsonDataStr.c_str());
        curl_easy_setopt(curl, CURLOPT_HTTPHEADER, curl_slist_append(NULL, "Content-Type: application/json"));
        curl_easy_setopt(curl, CURLOPT_CUSTOMREQUEST, "POST");

        res = curl_easy_perform(curl);

        if (res != CURLE_OK) {
            std::cerr << "curl_easy_perform() failed: " << curl_easy_strerror(res) << std::endl;
        }
        else {
            std::cout << "Response: " << readBuffer << std::endl;
        }

        curl_easy_cleanup(curl);
    }

    curl_global_cleanup();
}

int main()
{
    Json::Value jsonData;
    jsonData["architecture"] = "value1";
    // jsonData["key2"] = "value2";

    sendJsonToApi("http://localhost/api/log", jsonData);

    return 0;
}