#include <SoftwareSerial.h>
#include <ESP8266WiFi.h>
#include <PubSubClient.h>

const char* ssid = "Alhaitham";
const char* password = "09095373581234";
const char* mqtt_server = "broker.netpie.io";
const int mqtt_port = 1883;
const char* mqtt_Client = "5dcf389f-09f4-4d43-8b64-420b6225a51e";
const char* mqtt_username = "VGXcwseN1nopCpEvNuXHksL777Tvph6o";
const char* mqtt_password = "PDt7tg1~Ou(PFD0xfN4Ifog8JjlhtvJ4";

EspSoftwareSerial::UART testSerial;

WiFiClient espClient;
PubSubClient client(espClient);

char msg[100];

void reconnect() {
    while (!client.connected()) {
        Serial.print("Attempting MQTT connection…\n");
        if (client.connect(mqtt_Client, mqtt_username, mqtt_password)) {
            Serial.println("connected\n");
            client.subscribe("@msg/led");
        } else {
            Serial.print("failed, rc=");
            Serial.print(client.state());
            Serial.println("try again in 5 seconds\n");
            delay(5000);
        }
    }
}

void setup() {
    Serial.begin(9600);
    
    Serial.println();
    Serial.print("Connecting to ");
    Serial.println(ssid);
    
    WiFi.begin(ssid, password);
    while (WiFi.status() != WL_CONNECTED) {
        delay(500);
        Serial.print(".");
    }
    
    Serial.println("");
    Serial.println("WiFi connected");

    Serial.println("IP address: ");
    Serial.println(WiFi.localIP());
    
    client.setServer(mqtt_server, mqtt_port);
    testSerial.begin(9600, EspSoftwareSerial::SWSERIAL_8N1, D5, D8, false, 95, 11);
}
int idx = 0;
String dust = "";
String temp = "";
String humid = "";
String carbon = "";
void loop() {
  // Echo
    
    if (!client.connected()) {
        reconnect();
    }
    client.loop();
    while (testSerial.available() > 0) {
      char c = testSerial.read();
      if(c == '@'){
        idx = 0;
        dust = "";
        humid = "";
        temp = "";
        carbon = "";
      } else if(c == '|'){
        idx++;
      }else if (c != '\n'){
        if(idx == 0){
          dust += c;
        }else if(idx == 1){
          temp += c;
        }else if(idx == 2){
          humid += c;
        }else{
          carbon += c;
        }
      }else{
        String data = "{\"data\": {\"dust\":" + String(dust) + ", \"temperature\":" + String(temp) + ", \"humidity\":" + String(humid) + ", \"carbon\":" + String(carbon) + "}}";
        Serial.println(data);
        data.toCharArray(msg, (data.length() + 1));
        client.publish("@shadow/data/update", msg);
      }
      Serial.print(c);
    }
  }


