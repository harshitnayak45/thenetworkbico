import React, { Component } from 'react';
class Volunteering extends Component {
    constructor(props){
        super(props);
        this.state={
            fields: [],
            lists: [],
        }
    }

    addService = () => {

        let list = {
            'community_service': this.refs.community_service.value,
           
            'frequency_of_participation': this.refs.frequency_of_participation.value,
            'total_activity': this.refs.total_activity.value
        }

        let lists = this.state.lists;
        lists.push(list)
        this.setState({
            lists: lists,
        })

        this.resetForm();

    }
    resetForm = () => {

        this.myFormRef.reset();

    }

    removeRow = (index) => {
        this.state.lists.splice(index, 1);
        this.setState({ lists: this.state.lists });

    }

    handleChange(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({ fields });
    }

    render() {
        return (
            <div>
                <div className="col-md-8 p-0 float-left application-registration-detail-main-left">
                    <div className="col-md-12 p-0 float-left application-registration-detail Volunteering-submit ">
                        <h2>Volunteering activities</h2>
                        <div className="col-md-12   p-0 float-left">
                            <h6>Please describe all community service activities you participated in during your high school years (grades 9-12 only).</h6>
                        </div>
                        <div className="col-md-12 p-0 float-left not-have">
                            <input type="checkbox" name="not_have" value="Not Have" /> I do not have any volunteer activities during my high school years<br />
                        </div>
                        <div className="col-md-12 p-0 float-left form-application-registration-detail">
                            
                           

                            {this.state.lists.map((array, index) =>
                                <div key={index}>

                                    <div className="col-md-12 p-0 float-left organizations_clone organizations_clone_detail">

                                        <div id="clonedInput1" className="col-md-12 p-0 float-left  clone_guardian  clone_remove">

                                            <div className="col-md-12 p-0 float-left">
                                                <div className="col-md-12 p-0 float-left ">
                                                    <p>Organizations <span className="number_activity"></span> activities</p>
                                                    <textarea rows="4" cols="80" value={array.community_service} name="community_service" onChange={this.handleChange.bind(this, "community_service")} ref="community_service1"></textarea>
                                                </div>
                                            </div>
                                            <div className="col-md-12 p-0 float-left">
                                                <div className="col-md-6 p-0 float-left p_r_10">
                                                    <p>Frequency of participation</p>
                                                    <select name="frequency_of_participation" value={array.frequency_of_participation} onChange={this.handleChange.bind(this, "frequency_of_participation")} ref="frequency_of_participation1">
                                                        <option value="Daily">Daily</option>
                                                        <option value="Weekly">Weekly</option>
                                                        <option value="Monthly">Monthly</option>
                                                        <option value="Annually">Annually</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-12 p-0 float-left">
                                                <div className="col-md-6 p-0 float-left p_r_10">
                                                    <p>Total hours for this activity</p>
                                                    <select name="total_activity" value={array.total_activity} onChange={this.handleChange.bind(this, "total_activity")} ref="total_activity" >
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                        <option value="5">5</option>
                                                        <option value="6">6</option>
                                                        <option value="7">7</option>
                                                        <option value="8">8</option>
                                                        <option value="9">9</option>
                                                        <option value="10">10</option>
                                                        <option value="11">11</option>
                                                        <option value="12">12</option>
                                                        <option value="13">13</option>
                                                        <option value="14">14</option>
                                                        <option value="15">15</option>
                                                        <option value="16">16</option>
                                                        <option value="17">17</option>
                                                        <option value="18">18</option>
                                                        <option value="19">19</option>
                                                        <option value="20">20</option>
                                                        <option value="21">21</option>
                                                        <option value="22">22</option>
                                                        <option value="23">23</option>
                                                        <option value="24">24</option>
                                                        <option value="25">25</option>
                                                        <option value="26">26</option>
                                                        <option value="27">27</option>
                                                        <option value="28">28</option>
                                                        <option value="29">29</option>
                                                        <option value="30">30</option>
                                                        <option value="31">31</option>
                                                        <option value="32">32</option>
                                                        <option value="33">33</option>
                                                        <option value="34">34</option>
                                                        <option value="35">35</option>
                                                        <option value="36">36</option>
                                                        <option value="37">37</option>
                                                        <option value="38">38</option>
                                                        <option value="39">39</option>
                                                        <option value="40">40</option>
                                                        <option value="41">41</option>
                                                        <option value="42">42</option>
                                                        <option value="43">43</option>
                                                        <option value="44">44</option>
                                                        <option value="45">45</option>
                                                        <option value="46">46</option>
                                                        <option value="47">47</option>
                                                        <option value="48">48</option>
                                                        <option value="49">49</option>
                                                        <option value="50">50</option>
                                                        <option value="51">51</option>
                                                        <option value="52">52</option>
                                                        <option value="53">53</option>
                                                        <option value="54">54</option>
                                                        <option value="55">55</option>
                                                        <option value="56">56</option>
                                                        <option value="57">57</option>
                                                        <option value="58">58</option>
                                                        <option value="59">59</option>
                                                        <option value="60">60</option>
                                                        <option value="61">61</option>
                                                        <option value="62">62</option>
                                                        <option value="63">63</option>
                                                        <option value="64">64</option>
                                                        <option value="65">65</option>
                                                        <option value="66">66</option>
                                                        <option value="67">67</option>
                                                        <option value="68">68</option>
                                                        <option value="69">69</option>
                                                        <option value="70">70</option>
                                                        <option value="71">71</option>
                                                        <option value="72">72</option>
                                                        <option value="73">73</option>
                                                        <option value="74">74</option>
                                                        <option value="75">75</option>
                                                        <option value="76">76</option>
                                                        <option value="77">77</option>
                                                        <option value="78">78</option>
                                                        <option value="79">79</option>
                                                        <option value="80">80</option>
                                                        <option value="81">81</option>
                                                        <option value="82">82</option>
                                                        <option value="83">83</option>
                                                        <option value="84">84</option>
                                                        <option value="85">85</option>
                                                        <option value="86">86</option>
                                                        <option value="87">87</option>
                                                        <option value="88">88</option>
                                                        <option value="89">89</option>
                                                        <option value="90">90</option>
                                                        <option value="91">91</option>
                                                        <option value="92">92</option>
                                                        <option value="93">93</option>
                                                        <option value="94">94</option>
                                                        <option value="95">95</option>
                                                        <option value="96">96</option>
                                                        <option value="97">97</option>
                                                        <option value="98">98</option>
                                                        <option value="99">99</option>
                                                        <option value="100">100</option>
                                                        <option value="101">101</option>
                                                        <option value="102">102</option>
                                                        <option value="103">103</option>
                                                        <option value="104">104</option>
                                                        <option value="105">105</option>
                                                        <option value="106">106</option>
                                                        <option value="107">107</option>
                                                        <option value="108">108</option>
                                                        <option value="109">109</option>
                                                        <option value="110">110</option>
                                                        <option value="111">111</option>
                                                        <option value="112">112</option>
                                                        <option value="113">113</option>
                                                        <option value="114">114</option>
                                                        <option value="115">115</option>
                                                        <option value="116">116</option>
                                                        <option value="117">117</option>
                                                        <option value="118">118</option>
                                                        <option value="119">119</option>
                                                        <option value="120">120</option>
                                                        <option value="121">121</option>
                                                        <option value="122">122</option>
                                                        <option value="123">123</option>
                                                        <option value="124">124</option>
                                                        <option value="125">125</option>
                                                        <option value="126">126</option>
                                                        <option value="127">127</option>
                                                        <option value="128">128</option>
                                                        <option value="129">129</option>
                                                        <option value="130">130</option>
                                                        <option value="131">131</option>
                                                        <option value="132">132</option>
                                                        <option value="133">133</option>
                                                        <option value="134">134</option>
                                                        <option value="135">135</option>
                                                        <option value="136">136</option>
                                                        <option value="137">137</option>
                                                        <option value="138">138</option>
                                                        <option value="139">139</option>
                                                        <option value="140">140</option>
                                                        <option value="141">141</option>
                                                        <option value="142">142</option>
                                                        <option value="143">143</option>
                                                        <option value="144">144</option>
                                                        <option value="145">145</option>
                                                        <option value="146">146</option>
                                                        <option value="147">147</option>
                                                        <option value="148">148</option>
                                                        <option value="149">149</option>
                                                        <option value="150">150</option>
                                                        <option value="151">151</option>
                                                        <option value="152">152</option>
                                                        <option value="153">153</option>
                                                        <option value="154">154</option>
                                                        <option value="155">155</option>
                                                        <option value="156">156</option>
                                                        <option value="157">157</option>
                                                        <option value="158">158</option>
                                                        <option value="159">159</option>
                                                        <option value="160">160</option>
                                                        <option value="161">161</option>
                                                        <option value="162">162</option>
                                                        <option value="163">163</option>
                                                        <option value="164">164</option>
                                                        <option value="165">165</option>
                                                        <option value="166">166</option>
                                                        <option value="167">167</option>
                                                        <option value="168">168</option>
                                                        <option value="169">169</option>
                                                        <option value="170">170</option>
                                                        <option value="171">171</option>
                                                        <option value="172">172</option>
                                                        <option value="173">173</option>
                                                        <option value="174">174</option>
                                                        <option value="175">175</option>
                                                        <option value="176">176</option>
                                                        <option value="177">177</option>
                                                        <option value="178">178</option>
                                                        <option value="179">179</option>
                                                        <option value="180">180</option>
                                                        <option value="181">181</option>
                                                        <option value="182">182</option>
                                                        <option value="183">183</option>
                                                        <option value="184">184</option>
                                                        <option value="185">185</option>
                                                        <option value="186">186</option>
                                                        <option value="187">187</option>
                                                        <option value="188">188</option>
                                                        <option value="189">189</option>
                                                        <option value="190">190</option>
                                                        <option value="191">191</option>
                                                        <option value="192">192</option>
                                                        <option value="193">193</option>
                                                        <option value="194">194</option>
                                                        <option value="195">195</option>
                                                        <option value="196">196</option>
                                                        <option value="197">197</option>
                                                        <option value="198">198</option>
                                                        <option value="199">199</option>
                                                        <option value="200">200</option>
                                                        <option value="200+">200+</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <h6 className="remove float-right" onClick={this.removeRow.bind(this, index)}>remove </h6>
                                        </div>
                                    </div>

                                </div>

                            )}

                         
                            <form ref={(el) => this.myFormRef = el} className="form-application-registration-detail">
                                
                                        <div className="col-md-12 p-0 float-left volunteering_clone">
                                            <div id="clonedInput1" className="col-md-12 p-0 float-left volunteering_clone_detail clone_remove">
                                                <div className="col-md-12 p-0 float-left">
                                                    <div className="col-md-12 p-0 float-left p_r_10">
                                                        <p>Community service <span className="number_activity"></span></p>
                                                <textarea rows="4" cols="80" name="community_service" onChange={this.handleChange.bind(this, "community_service")} ref="community_service"></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 p-0 float-left">
                                                    <div className="col-md-6 p-0 float-left p_r_10">
                                                        <p>Frequency of participation</p>
                                                <select name="frequency_of_participation" onChange={this.handleChange.bind(this, "frequency_of_participation")} ref="frequency_of_participation">
                                                            <option value="Daily">Daily</option>
                                                            <option value="Weekly">Weekly</option>
                                                            <option value="Monthly">Monthly</option>
                                                            <option value="Annually">Annually</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 p-0 float-left">
                                                    <div className="col-md-6 p-0 float-left p_r_10">
                                                        <p>Total hours for this activity</p>
                                                <select name="total_activity" onChange={this.handleChange.bind(this, "total_activity")} ref="total_activity">
                                                            <option value="1">1</option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                            <option value="5">5</option>
                                                            <option value="6">6</option>
                                                            <option value="7">7</option>
                                                            <option value="8">8</option>
                                                            <option value="9">9</option>
                                                            <option value="10">10</option>
                                                            <option value="11">11</option>
                                                            <option value="12">12</option>
                                                            <option value="13">13</option>
                                                            <option value="14">14</option>
                                                            <option value="15">15</option>
                                                            <option value="16">16</option>
                                                            <option value="17">17</option>
                                                            <option value="18">18</option>
                                                            <option value="19">19</option>
                                                            <option value="20">20</option>
                                                            <option value="21">21</option>
                                                            <option value="22">22</option>
                                                            <option value="23">23</option>
                                                            <option value="24">24</option>
                                                            <option value="25">25</option>
                                                            <option value="26">26</option>
                                                            <option value="27">27</option>
                                                            <option value="28">28</option>
                                                            <option value="29">29</option>
                                                            <option value="30">30</option>
                                                            <option value="31">31</option>
                                                            <option value="32">32</option>
                                                            <option value="33">33</option>
                                                            <option value="34">34</option>
                                                            <option value="35">35</option>
                                                            <option value="36">36</option>
                                                            <option value="37">37</option>
                                                            <option value="38">38</option>
                                                            <option value="39">39</option>
                                                            <option value="40">40</option>
                                                            <option value="41">41</option>
                                                            <option value="42">42</option>
                                                            <option value="43">43</option>
                                                            <option value="44">44</option>
                                                            <option value="45">45</option>
                                                            <option value="46">46</option>
                                                            <option value="47">47</option>
                                                            <option value="48">48</option>
                                                            <option value="49">49</option>
                                                            <option value="50">50</option>
                                                            <option value="51">51</option>
                                                            <option value="52">52</option>
                                                            <option value="53">53</option>
                                                            <option value="54">54</option>
                                                            <option value="55">55</option>
                                                            <option value="56">56</option>
                                                            <option value="57">57</option>
                                                            <option value="58">58</option>
                                                            <option value="59">59</option>
                                                            <option value="60">60</option>
                                                            <option value="61">61</option>
                                                            <option value="62">62</option>
                                                            <option value="63">63</option>
                                                            <option value="64">64</option>
                                                            <option value="65">65</option>
                                                            <option value="66">66</option>
                                                            <option value="67">67</option>
                                                            <option value="68">68</option>
                                                            <option value="69">69</option>
                                                            <option value="70">70</option>
                                                            <option value="71">71</option>
                                                            <option value="72">72</option>
                                                            <option value="73">73</option>
                                                            <option value="74">74</option>
                                                            <option value="75">75</option>
                                                            <option value="76">76</option>
                                                            <option value="77">77</option>
                                                            <option value="78">78</option>
                                                            <option value="79">79</option>
                                                            <option value="80">80</option>
                                                            <option value="81">81</option>
                                                            <option value="82">82</option>
                                                            <option value="83">83</option>
                                                            <option value="84">84</option>
                                                            <option value="85">85</option>
                                                            <option value="86">86</option>
                                                            <option value="87">87</option>
                                                            <option value="88">88</option>
                                                            <option value="89">89</option>
                                                            <option value="90">90</option>
                                                            <option value="91">91</option>
                                                            <option value="92">92</option>
                                                            <option value="93">93</option>
                                                            <option value="94">94</option>
                                                            <option value="95">95</option>
                                                            <option value="96">96</option>
                                                            <option value="97">97</option>
                                                            <option value="98">98</option>
                                                            <option value="99">99</option>
                                                            <option value="100">100</option>
                                                            <option value="101">101</option>
                                                            <option value="102">102</option>
                                                            <option value="103">103</option>
                                                            <option value="104">104</option>
                                                            <option value="105">105</option>
                                                            <option value="106">106</option>
                                                            <option value="107">107</option>
                                                            <option value="108">108</option>
                                                            <option value="109">109</option>
                                                            <option value="110">110</option>
                                                            <option value="111">111</option>
                                                            <option value="112">112</option>
                                                            <option value="113">113</option>
                                                            <option value="114">114</option>
                                                            <option value="115">115</option>
                                                            <option value="116">116</option>
                                                            <option value="117">117</option>
                                                            <option value="118">118</option>
                                                            <option value="119">119</option>
                                                            <option value="120">120</option>
                                                            <option value="121">121</option>
                                                            <option value="122">122</option>
                                                            <option value="123">123</option>
                                                            <option value="124">124</option>
                                                            <option value="125">125</option>
                                                            <option value="126">126</option>
                                                            <option value="127">127</option>
                                                            <option value="128">128</option>
                                                            <option value="129">129</option>
                                                            <option value="130">130</option>
                                                            <option value="131">131</option>
                                                            <option value="132">132</option>
                                                            <option value="133">133</option>
                                                            <option value="134">134</option>
                                                            <option value="135">135</option>
                                                            <option value="136">136</option>
                                                            <option value="137">137</option>
                                                            <option value="138">138</option>
                                                            <option value="139">139</option>
                                                            <option value="140">140</option>
                                                            <option value="141">141</option>
                                                            <option value="142">142</option>
                                                            <option value="143">143</option>
                                                            <option value="144">144</option>
                                                            <option value="145">145</option>
                                                            <option value="146">146</option>
                                                            <option value="147">147</option>
                                                            <option value="148">148</option>
                                                            <option value="149">149</option>
                                                            <option value="150">150</option>
                                                            <option value="151">151</option>
                                                            <option value="152">152</option>
                                                            <option value="153">153</option>
                                                            <option value="154">154</option>
                                                            <option value="155">155</option>
                                                            <option value="156">156</option>
                                                            <option value="157">157</option>
                                                            <option value="158">158</option>
                                                            <option value="159">159</option>
                                                            <option value="160">160</option>
                                                            <option value="161">161</option>
                                                            <option value="162">162</option>
                                                            <option value="163">163</option>
                                                            <option value="164">164</option>
                                                            <option value="165">165</option>
                                                            <option value="166">166</option>
                                                            <option value="167">167</option>
                                                            <option value="168">168</option>
                                                            <option value="169">169</option>
                                                            <option value="170">170</option>
                                                            <option value="171">171</option>
                                                            <option value="172">172</option>
                                                            <option value="173">173</option>
                                                            <option value="174">174</option>
                                                            <option value="175">175</option>
                                                            <option value="176">176</option>
                                                            <option value="177">177</option>
                                                            <option value="178">178</option>
                                                            <option value="179">179</option>
                                                            <option value="180">180</option>
                                                            <option value="181">181</option>
                                                            <option value="182">182</option>
                                                            <option value="183">183</option>
                                                            <option value="184">184</option>
                                                            <option value="185">185</option>
                                                            <option value="186">186</option>
                                                            <option value="187">187</option>
                                                            <option value="188">188</option>
                                                            <option value="189">189</option>
                                                            <option value="190">190</option>
                                                            <option value="191">191</option>
                                                            <option value="192">192</option>
                                                            <option value="193">193</option>
                                                            <option value="194">194</option>
                                                            <option value="195">195</option>
                                                            <option value="196">196</option>
                                                            <option value="197">197</option>
                                                            <option value="198">198</option>
                                                            <option value="199">199</option>
                                                            <option value="200">200</option>
                                                            <option value="200+">200+</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                <div onClick={this.addService} className="col-md-12   p-0 float-left clone_volunteering_button">
                                            <h6><svg className="svg-inline--fa fa-plus-circle fa-w-16" aria-hidden="true" data-fa-processed="" data-prefix="fa" data-icon="plus-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"></path></svg><i className="fa fa-plus-circle" aria-hidden="true"></i>  Add another community service</h6>
                                        </div>
                                        <div className="col-md-6  p-0  float-left button-submit">
                                            <input id="submit_form_application_1" type="button" name="submit_form_volunteering" value="Save and continue"/>
										</div> 
									</form>
                                        <h5 className="thank-you"></h5>
									</div>
                                </div>
							</div>
               
            </div>
        );
    }

}

export default Volunteering; 